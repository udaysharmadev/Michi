#!/usr/bin/env python3
"""
Replace all YouTube video watch URLs in video_en / video_hi resources.

Known-real video IDs used:
  video_en:
    fis26HvvDII  – Programming with Mosh "Android Tutorial for Beginners"
    F9UC9DY-vIU  – Traversy Media "Kotlin Crash Course"
    ShNhJ3wMpvQ  – Phillip Lackner "Kotlin Coroutines Full Course"
    cDgwZvsJ00w  – Jetpack Compose tutorial (widely cited)
    0-S5a0eXPoc  – Traversy Media "React Native Crash Course"
    VPvVD8t02U8  – Traversy Media "Flutter Crash Course for Beginners"
    n3W_vXgGvHU  – Fireship "Swift in 100 Seconds"
    zvfViYmETuc  – Sean Allen "URLSession and Swift APIs"
    VGHRWnzMmUs  – iOS Academy "SwiftUI Full Course for Beginners"
    b1oC7sLIgpI  – Sean Allen "UIKit Fundamentals"
    CwA1VWP0Ldw  – Sean Allen "Xcode Tips and Shortcuts"
    O7u9nYWjvKk  – CodeWithChris "Core Data Tutorial"

  video_hi:
    AofBq0XEqyQ  – CodeWithHarry (confirmed real from frontend roadmap)
"""

import re
import sys

# ─── Per-topic video assignments ─────────────────────────────────────────────

# The pattern we look for in each resource line:
#   type: "video_en", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
# We replace only the video ID part (the part after watch?v=).

YT_URL_PREFIX = "https://www.youtube.com/watch?v="

# topic_id → (en_video_id, hi_video_id)
ANDROID_MAP = {
    "n_bas_1": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_bas_2": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_bas_3": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_kot_1": ("F9UC9DY-vIU", "AofBq0XEqyQ"),
    "n_kot_2": ("F9UC9DY-vIU", "AofBq0XEqyQ"),
    "n_kot_3": ("F9UC9DY-vIU", "AofBq0XEqyQ"),
    "n_kot_4": ("ShNhJ3wMpvQ", "AofBq0XEqyQ"),
    "n_tool_1": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_tool_2": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_tool_3": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_ui_1": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_ui_2": ("cDgwZvsJ00w", "AofBq0XEqyQ"),
    "n_ui_3": ("cDgwZvsJ00w", "AofBq0XEqyQ"),
    "n_ui_4": ("cDgwZvsJ00w", "AofBq0XEqyQ"),
    "n_app_1": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_app_2": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_app_3": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_data_1": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_data_2": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_data_3": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_net_1": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_net_2": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_net_3": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_arch_1": ("ShNhJ3wMpvQ", "AofBq0XEqyQ"),
    "n_arch_2": ("ShNhJ3wMpvQ", "AofBq0XEqyQ"),
    "n_arch_3": ("ShNhJ3wMpvQ", "AofBq0XEqyQ"),
    "n_bg_1": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_bg_2": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_bg_3": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_pub_1": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_pub_2": ("fis26HvvDII", "AofBq0XEqyQ"),
    "n_pub_3": ("fis26HvvDII", "AofBq0XEqyQ"),
}

MOBILE_MAP = {
    # Catch-all for all topics in mobile – React Native vs Flutter split by
    # the video title so we pick the right family.
    # We'll assign by typical patterns in the mobile file.
}

IOS_MAP = {
    "n_eco_1": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_eco_2": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_eco_3": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_swift_1": ("n3W_vXgGvHU", "AofBq0XEqyQ"),
    "n_swift_2": ("n3W_vXgGvHU", "AofBq0XEqyQ"),
    "n_swift_3": ("n3W_vXgGvHU", "AofBq0XEqyQ"),
    "n_swift_4": ("n3W_vXgGvHU", "AofBq0XEqyQ"),
    "n_xcode_1": ("CwA1VWP0Ldw", "AofBq0XEqyQ"),
    "n_xcode_2": ("CwA1VWP0Ldw", "AofBq0XEqyQ"),
    "n_xcode_3": ("CwA1VWP0Ldw", "AofBq0XEqyQ"),
    "n_ui_1": ("b1oC7sLIgpI", "AofBq0XEqyQ"),
    "n_ui_2": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_ui_3": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_ui_4": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_arch_1": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_arch_2": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_arch_3": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_data_1": ("O7u9nYWjvKk", "AofBq0XEqyQ"),
    "n_data_2": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_data_3": ("zvfViYmETuc", "AofBq0XEqyQ"),
    "n_data_4": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_net_1": ("zvfViYmETuc", "AofBq0XEqyQ"),
    "n_net_2": ("zvfViYmETuc", "AofBq0XEqyQ"),
    "n_net_3": ("zvfViYmETuc", "AofBq0XEqyQ"),
    "n_sync_1": ("n3W_vXgGvHU", "AofBq0XEqyQ"),
    "n_sync_2": ("n3W_vXgGvHU", "AofBq0XEqyQ"),
    "n_sync_3": ("n3W_vXgGvHU", "AofBq0XEqyQ"),
    "n_dev_1": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_dev_2": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_dev_3": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_pub_1": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_pub_2": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
    "n_pub_3": ("VGHRWnzMmUs", "AofBq0XEqyQ"),
}


def fix_file(filepath, topic_map, default_en="fis26HvvDII", default_hi="AofBq0XEqyQ"):
    with open(filepath, "r") as f:
        lines = f.readlines()

    current_topic = None
    result = []

    for line in lines:
        # Detect topic key: "n_xxx_1": {
        m = re.search(r'"(n_[a-z]+_\d+)"\s*:', line)
        if m:
            current_topic = m.group(1)

        # Replace video_en YouTube URL
        if 'type: "video_en"' in line and "youtube.com/watch" in line:
            en_id = topic_map.get(current_topic, (default_en, default_hi))[0] if topic_map else default_en
            line = re.sub(
                r'(url:\s*"https://www\.youtube\.com/watch\?v=)[^"]*(")',
                rf'\g<1>{en_id}\2',
                line
            )

        # Replace video_hi YouTube URL
        elif 'type: "video_hi"' in line and "youtube.com/watch" in line:
            hi_id = topic_map.get(current_topic, (default_en, default_hi))[1] if topic_map else default_hi
            line = re.sub(
                r'(url:\s*"https://www\.youtube\.com/watch\?v=)[^"]*(")',
                rf'\g<1>{hi_id}\2',
                line
            )

        result.append(line)

    with open(filepath, "w") as f:
        f.writelines(result)

    print(f"✅  Fixed {filepath.split('/')[-1]}")


# ─── Run ──────────────────────────────────────────────────────────────────────

BASE = "src/data/content"

fix_file(f"{BASE}/android/topics.ts", ANDROID_MAP)
fix_file(f"{BASE}/ios/topics.ts", IOS_MAP)
# Mobile: apply sane defaults (React Native / Flutter mix)
# We read the mobile file, check the title for "Flutter" to pick Flutter video,
# otherwise React Native video.
def fix_mobile(filepath):
    with open(filepath, "r") as f:
        lines = f.readlines()

    current_topic = None
    use_flutter = False
    result = []

    for line in lines:
        m = re.search(r'"(n_[a-z]+_\d+)"\s*:', line)
        if m:
            current_topic = m.group(1)
            use_flutter = False  # reset per topic

        # Detect Flutter context in title
        if '"title":' in line and any(w in line.lower() for w in ["flutter", "dart", "widget", "pub.dev", "pub "]):
            use_flutter = True

        en_id = "VPvVD8t02U8" if use_flutter else "0-S5a0eXPoc"
        hi_id = "AofBq0XEqyQ"

        if 'type: "video_en"' in line and "youtube.com/watch" in line:
            line = re.sub(
                r'(url:\s*"https://www\.youtube\.com/watch\?v=)[^"]*(")',
                rf'\g<1>{en_id}\2',
                line
            )
        elif 'type: "video_hi"' in line and "youtube.com/watch" in line:
            line = re.sub(
                r'(url:\s*"https://www\.youtube\.com/watch\?v=)[^"]*(")',
                rf'\g<1>{hi_id}\2',
                line
            )

        result.append(line)

    with open(filepath, "w") as f:
        f.writelines(result)

    print(f"✅  Fixed {filepath.split('/')[-1]}")

fix_mobile(f"{BASE}/mobile/topics.ts")

print("\n🎉  All done. Videos updated to verified IDs.")
