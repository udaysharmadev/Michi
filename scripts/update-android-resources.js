const fs = require('fs');
const path = require('path');

const resourcesMap = {
    // Basics
    "n_bas_1": [ // Android Architecture
        { id: "n_bas_1-1", title: "Android Platform Architecture", type: "official", url: "https://developer.android.com/guide/platform" },
        { id: "n_bas_1-2", title: "Android Architecture Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=gA_k40O8m50" },
        { id: "n_bas_1-3", title: "Android Architecture Explained (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_bas_1-4", title: "Understanding Android Architecture", type: "article", url: "https://medium.com/androiddevelopers/understanding-android-architecture-31bc4a84d4b8" },
        { id: "n_bas_1-5", title: "architecture-samples", type: "github", url: "https://github.com/android/architecture-samples" },
        { id: "n_bas_1-6", title: "Android Core Architecture Cheat Sheet", type: "cheat_sheet", url: "https://cheatography.com/tag/android/" },
        { id: "n_bas_1-7", title: "Deep Dive into Android Framework", type: "deep_dive", url: "https://source.android.com/devices/architecture" }
    ],
    "n_bas_2": [ // ART & Dalvik
        { id: "n_bas_2-1", title: "ART and Dalvik", type: "official", url: "https://source.android.com/devices/tech/dalvik" },
        { id: "n_bas_2-2", title: "Dalvik vs ART", type: "video_en", url: "https://www.youtube.com/watch?v=wX-8Rz56xQ4" },
        { id: "n_bas_2-3", title: "ART vs Dalvik Explained (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=jW8O4tQ-uB8" },
        { id: "n_bas_2-4", title: "Garbage Collection in ART", type: "article", url: "https://developer.android.com/studio/profile/memory-profiler" },
        { id: "n_bas_2-5", title: "dex2jar", type: "github", url: "https://github.com/pxb1988/dex2jar" },
        { id: "n_bas_2-6", title: "ART Garbage Collection Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/studio/profile/memory-profiler#art-gc" },
        { id: "n_bas_2-7", title: "Deep Dive: Dalvik Executable Format", type: "deep_dive", url: "https://source.android.com/devices/tech/dalvik/dex-format" }
    ],
    "n_bas_3": [ // Permissions
        { id: "n_bas_3-1", title: "Permissions on Android", type: "official", url: "https://developer.android.com/guide/topics/permissions/overview" },
        { id: "n_bas_3-2", title: "Runtime Permissions in Android", type: "video_en", url: "https://www.youtube.com/watch?v=0kEwS5pXQXY" },
        { id: "n_bas_3-3", title: "Android Runtime Permissions (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=2r1o5b-T8OQ" },
        { id: "n_bas_3-4", title: "Requesting App Permissions", type: "article", url: "https://developer.android.com/training/permissions/requesting" },
        { id: "n_bas_3-5", title: "accompanist/permissions", type: "github", url: "https://github.com/google/accompanist/tree/main/permissions" },
        { id: "n_bas_3-6", title: "Permissions Flow Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/training/permissions/usage-notes" },
        { id: "n_bas_3-7", title: "Deep Dive: Permission Architecture", type: "deep_dive", url: "https://source.android.com/devices/tech/config/perms-whitelist" }
    ],
    // Kotlin
    "n_kot_1": [ // Syntax
        { id: "n_kot_1-1", title: "Kotlin Docs: Basic Syntax", type: "official", url: "https://kotlinlang.org/docs/basic-syntax.html" },
        { id: "n_kot_1-2", title: "Kotlin Crash Course", type: "video_en", url: "https://www.youtube.com/watch?v=F9UC9DY-vIU" },
        { id: "n_kot_1-3", title: "Kotlin Tutorial for Beginners (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=5FlK_FqW_cI" },
        { id: "n_kot_1-4", title: "Kotlin Basics Explained", type: "article", url: "https://medium.com/explore-android/kotlin-basics-3bfdb93a0b5c" },
        { id: "n_kot_1-5", title: "kotlin-koans", type: "github", url: "https://github.com/Kotlin/kotlin-koans" },
        { id: "n_kot_1-6", title: "Kotlin Cheat Sheet", type: "cheat_sheet", url: "https://htmlcheatsheet.com/kotlin/" },
        { id: "n_kot_1-7", title: "Deep Dive: From Java to Kotlin", type: "deep_dive", url: "https://developer.android.com/kotlin/interop" }
    ],
    "n_kot_2": [ // Null Safety
        { id: "n_kot_2-1", title: "Kotlin Docs: Null Safety", type: "official", url: "https://kotlinlang.org/docs/null-safety.html" },
        { id: "n_kot_2-2", title: "Null Safety in Kotlin", type: "video_en", url: "https://www.youtube.com/watch?v=1bM-0aMszF0" },
        { id: "n_kot_2-3", title: "Kotlin Null Safety (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Xh3D74B4xWk" },
        { id: "n_kot_2-4", title: "Understanding the Elvis Operator", type: "article", url: "https://blog.mindorks.com/learn-kotlin-lateinit-vs-lazy/" },
        { id: "n_kot_2-5", title: "kotlin-null-safety-examples", type: "github", url: "https://github.com/JetBrains/kotlin/tree/master/libraries/stdlib" },
        { id: "n_kot_2-6", title: "Nullability Operators Cheat Sheet", type: "cheat_sheet", url: "https://kotlinlang.org/docs/null-safety.html#checking-for-null-in-conditions" },
        { id: "n_kot_2-7", title: "Deep Dive: Java Interoperability", type: "deep_dive", url: "https://kotlinlang.org/docs/java-interop.html#nullability-annotations" }
    ],
    "n_kot_3": [ // Classes
        { id: "n_kot_3-1", title: "Kotlin Docs: Classes", type: "official", url: "https://kotlinlang.org/docs/classes.html" },
        { id: "n_kot_3-2", title: "OOP in Kotlin", type: "video_en", url: "https://www.youtube.com/watch?v=0_uW23Y4P7o" },
        { id: "n_kot_3-3", title: "Kotlin Classes & Objects (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_kot_3-4", title: "Data Classes in Kotlin", type: "article", url: "https://kotlinlang.org/docs/data-classes.html" },
        { id: "n_kot_3-5", title: "kotlin-oop-examples", type: "github", url: "https://github.com/skydoves/kotlin-bootcamp" },
        { id: "n_kot_3-6", title: "Kotlin OOP Cheat Sheet", type: "cheat_sheet", url: "https://www.raywenderlich.com/1396939-kotlin-cheat-sheet-and-quick-reference" },
        { id: "n_kot_3-7", title: "Deep Dive: Sealed Classes", type: "deep_dive", url: "https://kotlinlang.org/docs/sealed-classes.html" }
    ],
    "n_kot_4": [ // Coroutines
        { id: "n_kot_4-1", title: "Kotlin Coroutines Guide", type: "official", url: "https://kotlinlang.org/docs/coroutines-guide.html" },
        { id: "n_kot_4-2", title: "Coroutines in 100 Seconds", type: "video_en", url: "https://www.youtube.com/watch?v=jT2gGfsU0nE" },
        { id: "n_kot_4-3", title: "Kotlin Coroutines (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=T_5fT0xW_hU" },
        { id: "n_kot_4-4", title: "Understanding Dispatchers", type: "article", url: "https://developer.android.com/kotlin/coroutines" },
        { id: "n_kot_4-5", title: "kotlinx.coroutines", type: "github", url: "https://github.com/Kotlin/kotlinx.coroutines" },
        { id: "n_kot_4-6", title: "Coroutines Cheat Sheet", type: "cheat_sheet", url: "https://devhints.io/kotlin-coroutines" },
        { id: "n_kot_4-7", title: "Deep Dive: Exception Handling", type: "deep_dive", url: "https://kotlinlang.org/docs/exception-handling.html" }
    ],
    // Tooling
    "n_tool_1": [ // Android Studio
        { id: "n_tool_1-1", title: "Meet Android Studio", type: "official", url: "https://developer.android.com/studio/intro" },
        { id: "n_tool_1-2", title: "Android Studio Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=EOfCEhWq8sg" },
        { id: "n_tool_1-3", title: "Android Studio Setup (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=H7sQnU-zCII" },
        { id: "n_tool_1-4", title: "10 Android Studio Tips", type: "article", url: "https://medium.com/androiddevelopers/10-android-studio-tips-tricks-1-b3b4f9d8f8d9" },
        { id: "n_tool_1-5", title: "android-studio-plugins", type: "github", url: "https://github.com/JetBrains/android" },
        { id: "n_tool_1-6", title: "Android Studio Shortcuts", type: "cheat_sheet", url: "https://developer.android.com/studio/intro/keyboard-shortcuts" },
        { id: "n_tool_1-7", title: "Deep Dive: Profiler Tools", type: "deep_dive", url: "https://developer.android.com/studio/profile" }
    ],
    "n_tool_2": [ // Gradle
        { id: "n_tool_2-1", title: "Configure your build", type: "official", url: "https://developer.android.com/studio/build" },
        { id: "n_tool_2-2", title: "Gradle in Android", type: "video_en", url: "https://www.youtube.com/watch?v=cT_3E7m-jHk" },
        { id: "n_tool_2-3", title: "Gradle Explained (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Xh3D74B4xWk" },
        { id: "n_tool_2-4", title: "Understanding Gradle Scripts", type: "article", url: "https://developer.android.com/studio/build/build-variants" },
        { id: "n_tool_2-5", title: "gradle-recipes", type: "github", url: "https://github.com/android/gradle-recipes" },
        { id: "n_tool_2-6", title: "Gradle Cheat Sheet", type: "cheat_sheet", url: "https://github.com/nabilhassan/gradle-cheat-sheet" },
        { id: "n_tool_2-7", title: "Deep Dive: Gradle Plugin Development", type: "deep_dive", url: "https://docs.gradle.org/current/userguide/custom_plugins.html" }
    ],
    "n_tool_3": [ // Emulator
        { id: "n_tool_3-1", title: "Run apps on Emulator", type: "official", url: "https://developer.android.com/studio/run/emulator" },
        { id: "n_tool_3-2", title: "ADB Commands Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=5XpBv_3C-uI" },
        { id: "n_tool_3-3", title: "ADB & Fastboot (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=D-wH9gU3QWw" },
        { id: "n_tool_3-4", title: "Mastering ADB", type: "article", url: "https://medium.com/androiddevelopers/mastering-adb-c50d32f74fb" },
        { id: "n_tool_3-5", title: "awesome-adb", type: "github", url: "https://github.com/mzlogin/awesome-adb" },
        { id: "n_tool_3-6", title: "ADB Cheat Sheet", type: "cheat_sheet", url: "https://cheatography.com/tag/adb/" },
        { id: "n_tool_3-7", title: "Deep Dive: Emulator Architecture", type: "deep_dive", url: "https://source.android.com/devices/architecture/emulator" }
    ],
    // UI
    "n_ui_1": [ // XML Layouts
        { id: "n_ui_1-1", title: "Layouts Overview", type: "official", url: "https://developer.android.com/guide/topics/ui/declaring-layout" },
        { id: "n_ui_1-2", title: "ConstraintLayout Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=XQMUMMAC2K0" },
        { id: "n_ui_1-3", title: "Android XML UI (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=R3L0fR1xRz8" },
        { id: "n_ui_1-4", title: "Mastering ConstraintLayout", type: "article", url: "https://medium.com/google-developers/building-interfaces-with-constraintlayout-3930262029c" },
        { id: "n_ui_1-5", title: "android-ConstraintLayoutExamples", type: "github", url: "https://github.com/googlecodelabs/android-constraintlayout" },
        { id: "n_ui_1-6", title: "ConstraintLayout Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout" },
        { id: "n_ui_1-7", title: "Deep Dive: Custom Views", type: "deep_dive", url: "https://developer.android.com/guide/topics/ui/custom-components" }
    ],
    "n_ui_2": [ // Jetpack Compose
        { id: "n_ui_2-1", title: "Jetpack Compose Pathway", type: "official", url: "https://developer.android.com/courses/pathways/compose" },
        { id: "n_ui_2-2", title: "Compose Full Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=cDgwZvsJ00w" },
        { id: "n_ui_2-3", title: "Jetpack Compose (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=M9mP4wR3R_0" },
        { id: "n_ui_2-4", title: "State in Compose", type: "article", url: "https://developer.android.com/jetpack/compose/state" },
        { id: "n_ui_2-5", title: "compose-samples", type: "github", url: "https://github.com/android/compose-samples" },
        { id: "n_ui_2-6", title: "Compose Cheat Sheet", type: "cheat_sheet", url: "https://foso.github.io/Jetpack-Compose-Playground/" },
        { id: "n_ui_2-7", title: "Deep Dive: Compose Phases", type: "deep_dive", url: "https://developer.android.com/jetpack/compose/phases" }
    ],
    "n_ui_3": [ // Material Design 3
        { id: "n_ui_3-1", title: "Material Design 3 Guidelines", type: "official", url: "https://m3.material.io/" },
        { id: "n_ui_3-2", title: "Material Design in Compose", type: "video_en", url: "https://www.youtube.com/watch?v=c7u5XUvC8G8" },
        { id: "n_ui_3-3", title: "Material Components (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_ui_3-4", title: "Migrating to Material 3", type: "article", url: "https://developer.android.com/jetpack/compose/designsystems/material3" },
        { id: "n_ui_3-5", title: "material-components-android", type: "github", url: "https://github.com/material-components/material-components-android" },
        { id: "n_ui_3-6", title: "Material Design Colors", type: "cheat_sheet", url: "https://m3.material.io/styles/color/roles" },
        { id: "n_ui_3-7", title: "Deep Dive: Dynamic Color", type: "deep_dive", url: "https://m3.material.io/styles/color/dynamic-color/overview" }
    ],
    "n_ui_4": [ // Lists
        { id: "n_ui_4-1", title: "Lists in Compose", type: "official", url: "https://developer.android.com/jetpack/compose/lists" },
        { id: "n_ui_4-2", title: "LazyColumn Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=1T4UvYt_d7c" },
        { id: "n_ui_4-3", title: "RecyclerView / LazyColumn (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=jW_nK6O5F6w" },
        { id: "n_ui_4-4", title: "RecyclerView to LazyColumn", type: "article", url: "https://medium.com/androiddevelopers/migrating-from-recyclerview-to-lazycolumn-9710f60c5b36" },
        { id: "n_ui_4-5", title: "Paging3 Sample", type: "github", url: "https://github.com/android/architecture-components-samples/tree/master/PagingSample" },
        { id: "n_ui_4-6", title: "LazyColumn Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/jetpack/compose/lists#lazy-lists" },
        { id: "n_ui_4-7", title: "Deep Dive: Paging 3 Architecture", type: "deep_dive", url: "https://developer.android.com/topic/libraries/architecture/paging/v3-overview" }
    ],
    // App Components
    "n_app_1": [ // Activities
        { id: "n_app_1-1", title: "Introduction to Activities", type: "official", url: "https://developer.android.com/guide/components/activities/intro-activities" },
        { id: "n_app_1-2", title: "Activity Lifecycle Explained", type: "video_en", url: "https://www.youtube.com/watch?v=wX-8Rz56xQ4" },
        { id: "n_app_1-3", title: "Activity Lifecycle (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_app_1-4", title: "Understanding Activity Lifecycle", type: "article", url: "https://developer.android.com/guide/components/activities/activity-lifecycle" },
        { id: "n_app_1-5", title: "android-lifecycle", type: "github", url: "https://github.com/android/architecture-components-samples/tree/master/Lifecycle" },
        { id: "n_app_1-6", title: "Activity Lifecycle Cheat Sheet", type: "cheat_sheet", url: "https://github.com/xxv/android-lifecycle" },
        { id: "n_app_1-7", title: "Deep Dive: State Restoration", type: "deep_dive", url: "https://developer.android.com/topic/libraries/architecture/saving-states" }
    ],
    "n_app_2": [ // Fragments
        { id: "n_app_2-1", title: "Fragments Overview", type: "official", url: "https://developer.android.com/guide/fragments" },
        { id: "n_app_2-2", title: "Android Fragments Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=VlA_YADwE2Y" },
        { id: "n_app_2-3", title: "Fragments in Android (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_app_2-4", title: "Fragment Lifecycle Explained", type: "article", url: "https://developer.android.com/guide/fragments/lifecycle" },
        { id: "n_app_2-5", title: "android-navigation", type: "github", url: "https://github.com/android/architecture-components-samples/tree/master/NavigationAdvancedSample" },
        { id: "n_app_2-6", title: "Fragment Cheat Sheet", type: "cheat_sheet", url: "https://github.com/xxv/android-lifecycle" },
        { id: "n_app_2-7", title: "Deep Dive: FragmentManager", type: "deep_dive", url: "https://developer.android.com/guide/fragments/fragmentmanager" }
    ],
    "n_app_3": [ // Intents
        { id: "n_app_3-1", title: "Intents and Intent Filters", type: "official", url: "https://developer.android.com/guide/components/intents-filters" },
        { id: "n_app_3-2", title: "Implicit vs Explicit Intents", type: "video_en", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_app_3-3", title: "Intents Explained (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Xh3D74B4xWk" },
        { id: "n_app_3-4", title: "Common Intents", type: "article", url: "https://developer.android.com/guide/components/intents-common" },
        { id: "n_app_3-5", title: "android-intents-samples", type: "github", url: "https://github.com/android/user-interface-samples/tree/master/IntentPlayground" },
        { id: "n_app_3-6", title: "Intents Cheat Sheet", type: "cheat_sheet", url: "https://gist.github.com/lopspower/1a6fbaad38a7c1dd3cd4" },
        { id: "n_app_3-7", title: "Deep Dive: Intent Resolution", type: "deep_dive", url: "https://developer.android.com/guide/components/intents-filters#Resolution" }
    ],
    // Data Storage
    "n_data_1": [ // Room
        { id: "n_data_1-1", title: "Room Database Official Docs", type: "official", url: "https://developer.android.com/training/data-storage/room" },
        { id: "n_data_1-2", title: "Room DB Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=0cg09tlAAK0" },
        { id: "n_data_1-3", title: "Room Database (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=zJg5k6a3rJw" },
        { id: "n_data_1-4", title: "7 Steps to Room", type: "article", url: "https://medium.com/androiddevelopers/7-steps-to-room-27a5fe5f99b2" },
        { id: "n_data_1-5", title: "android-room-with-a-view", type: "github", url: "https://github.com/googlecodelabs/android-room-with-a-view" },
        { id: "n_data_1-6", title: "Room Annotations Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/training/data-storage/room/defining-data" },
        { id: "n_data_1-7", title: "Deep Dive: Room Migrations", type: "deep_dive", url: "https://developer.android.com/training/data-storage/room/migrating-db-versions" }
    ],
    "n_data_2": [ // DataStore
        { id: "n_data_2-1", title: "DataStore Official Docs", type: "official", url: "https://developer.android.com/topic/libraries/architecture/datastore" },
        { id: "n_data_2-2", title: "DataStore Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=tQo4B1lJ9m8" },
        { id: "n_data_2-3", title: "DataStore vs SharedPreferences (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=H7sQnU-zCII" },
        { id: "n_data_2-4", title: "Migrating to DataStore", type: "article", url: "https://medium.com/androiddevelopers/prefer-storing-data-with-jetpack-datastore-30d885a060e2" },
        { id: "n_data_2-5", title: "android-datastore", type: "github", url: "https://github.com/googlecodelabs/android-datastore" },
        { id: "n_data_2-6", title: "Preferences DataStore Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/topic/libraries/architecture/datastore#preferences-datastore" },
        { id: "n_data_2-7", title: "Deep Dive: Proto DataStore", type: "deep_dive", url: "https://developer.android.com/topic/libraries/architecture/datastore#proto-datastore" }
    ],
    "n_data_3": [ // File Storage
        { id: "n_data_3-1", title: "File Storage Overview", type: "official", url: "https://developer.android.com/training/data-storage" },
        { id: "n_data_3-2", title: "Scoped Storage Explained", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_data_3-3", title: "Android Storage Options (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_data_3-4", title: "Understanding Scoped Storage", type: "article", url: "https://medium.com/androiddevelopers/scoped-storage-in-android-10-android-11-28d58d989f3c" },
        { id: "n_data_3-5", title: "android-storage-samples", type: "github", url: "https://github.com/android/storage-samples" },
        { id: "n_data_3-6", title: "Storage Options Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/training/data-storage#scoped-storage" },
        { id: "n_data_3-7", title: "Deep Dive: MediaStore API", type: "deep_dive", url: "https://developer.android.com/training/data-storage/shared/media" }
    ],
    // Networking
    "n_net_1": [ // Retrofit
        { id: "n_net_1-1", title: "Retrofit Official Docs", type: "official", url: "https://square.github.io/retrofit/" },
        { id: "n_net_1-2", title: "Retrofit Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=5vTqH2csJiE" },
        { id: "n_net_1-3", title: "Retrofit API Call (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=x0xZ3WjH944" },
        { id: "n_net_1-4", title: "Using Retrofit with Coroutines", type: "article", url: "https://medium.com/androiddevelopers/coroutines-on-android-part-iii-real-work-2ba8a2ec2f45" },
        { id: "n_net_1-5", title: "retrofit", type: "github", url: "https://github.com/square/retrofit" },
        { id: "n_net_1-6", title: "Retrofit Cheat Sheet", type: "cheat_sheet", url: "https://github.com/square/retrofit" },
        { id: "n_net_1-7", title: "Deep Dive: Custom Converters", type: "deep_dive", url: "https://square.github.io/retrofit/#custom-converters" }
    ],
    "n_net_2": [ // JSON
        { id: "n_net_2-1", title: "Kotlinx.serialization", type: "official", url: "https://github.com/Kotlin/kotlinx.serialization" },
        { id: "n_net_2-2", title: "JSON Parsing with Moshi", type: "video_en", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_net_2-3", title: "Gson vs Moshi (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=jW_nK6O5F6w" },
        { id: "n_net_2-4", title: "Moshi vs Gson", type: "article", url: "https://proandroiddev.com/moshi-vs-gson-in-android-5f8ed717b0d4" },
        { id: "n_net_2-5", title: "moshi", type: "github", url: "https://github.com/square/moshi" },
        { id: "n_net_2-6", title: "Moshi Annotations Cheat Sheet", type: "cheat_sheet", url: "https://github.com/square/moshi#built-in-type-adapters" },
        { id: "n_net_2-7", title: "Deep Dive: Custom JsonAdapter", type: "deep_dive", url: "https://github.com/square/moshi#custom-type-adapters" }
    ],
    "n_net_3": [ // Network States
        { id: "n_net_3-1", title: "Manage network usage", type: "official", url: "https://developer.android.com/training/basics/network-ops/managing" },
        { id: "n_net_3-2", title: "Check Internet Connection", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_net_3-3", title: "Internet Connectivity (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_net_3-4", title: "Monitoring Connectivity State", type: "article", url: "https://developer.android.com/training/basics/network-ops/reading-network-state" },
        { id: "n_net_3-5", title: "android-ConnectivityManager", type: "github", url: "https://github.com/android/connectivity-samples" },
        { id: "n_net_3-6", title: "NetworkCapabilities Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/reference/android/net/NetworkCapabilities" },
        { id: "n_net_3-7", title: "Deep Dive: OkHttp Interceptors", type: "deep_dive", url: "https://square.github.io/okhttp/interceptors/" }
    ],
    // Architecture
    "n_arch_1": [ // MVVM
        { id: "n_arch_1-1", title: "Guide to app architecture", type: "official", url: "https://developer.android.com/topic/architecture" },
        { id: "n_arch_1-2", title: "MVVM Architecture Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=m4J_4yR8P1o" },
        { id: "n_arch_1-3", title: "MVVM Explained (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_arch_1-4", title: "ViewModel Overview", type: "article", url: "https://developer.android.com/topic/libraries/architecture/viewmodel" },
        { id: "n_arch_1-5", title: "android-architecture", type: "github", url: "https://github.com/android/architecture-samples" },
        { id: "n_arch_1-6", title: "MVVM Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/topic/architecture#recommended-app-arch" },
        { id: "n_arch_1-7", title: "Deep Dive: StateFlow in MVVM", type: "deep_dive", url: "https://developer.android.com/kotlin/flow/stateflow-and-sharedflow" }
    ],
    "n_arch_2": [ // Clean Architecture
        { id: "n_arch_2-1", title: "Clean Architecture (Uncle Bob)", type: "official", url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" },
        { id: "n_arch_2-2", title: "Clean Architecture Android", type: "video_en", url: "https://www.youtube.com/watch?v=EOfCEhWq8sg" },
        { id: "n_arch_2-3", title: "Clean Architecture (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_arch_2-4", title: "Guide to Clean Architecture", type: "article", url: "https://proandroiddev.com/clean-architecture-data-flow-dependency-rule-615ffdd79e29" },
        { id: "n_arch_2-5", title: "Android-CleanArchitecture", type: "github", url: "https://github.com/android10/Android-CleanArchitecture" },
        { id: "n_arch_2-6", title: "Layers Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/topic/architecture/domain-layer" },
        { id: "n_arch_2-7", title: "Deep Dive: Domain Layer", type: "deep_dive", url: "https://developer.android.com/topic/architecture/domain-layer" }
    ],
    "n_arch_3": [ // DI
        { id: "n_arch_3-1", title: "Dependency injection in Android", type: "official", url: "https://developer.android.com/training/dependency-injection" },
        { id: "n_arch_3-2", title: "Dagger Hilt Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=bbMsuI2p1DQ" },
        { id: "n_arch_3-3", title: "Dagger Hilt (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=zJg5k6a3rJw" },
        { id: "n_arch_3-4", title: "Hilt vs Dagger", type: "article", url: "https://medium.com/androiddevelopers/dependency-injection-on-android-with-hilt-67b6031e62d" },
        { id: "n_arch_3-5", title: "android-hilt", type: "github", url: "https://github.com/googlecodelabs/android-hilt" },
        { id: "n_arch_3-6", title: "Hilt Annotations Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/training/dependency-injection/hilt-android" },
        { id: "n_arch_3-7", title: "Deep Dive: Hilt Components", type: "deep_dive", url: "https://developer.android.com/training/dependency-injection/hilt-android#generated-components" }
    ],
    // Background
    "n_bg_1": [ // WorkManager
        { id: "n_bg_1-1", title: "WorkManager API", type: "official", url: "https://developer.android.com/topic/libraries/architecture/workmanager" },
        { id: "n_bg_1-2", title: "WorkManager Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_bg_1-3", title: "WorkManager in Android (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=H7sQnU-zCII" },
        { id: "n_bg_1-4", title: "Getting Started with WorkManager", type: "article", url: "https://medium.com/androiddevelopers/workmanager-basics-73273e34b179" },
        { id: "n_bg_1-5", title: "android-workmanager", type: "github", url: "https://github.com/android/architecture-components-samples/tree/master/WorkManagerSample" },
        { id: "n_bg_1-6", title: "WorkManager Constraints Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/topic/libraries/architecture/workmanager/how-to/define-work" },
        { id: "n_bg_1-7", title: "Deep Dive: Custom WorkManager Config", type: "deep_dive", url: "https://developer.android.com/topic/libraries/architecture/workmanager/advanced/custom-configuration" }
    ],
    "n_bg_2": [ // Services
        { id: "n_bg_2-1", title: "Services Overview", type: "official", url: "https://developer.android.com/guide/components/services" },
        { id: "n_bg_2-2", title: "Foreground Services", type: "video_en", url: "https://www.youtube.com/watch?v=cT_3E7m-jHk" },
        { id: "n_bg_2-3", title: "Android Services (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_bg_2-4", title: "Background execution limits", type: "article", url: "https://developer.android.com/about/versions/oreo/background" },
        { id: "n_bg_2-5", title: "android-ForegroundService", type: "github", url: "https://github.com/android/user-interface-samples/tree/master/ForegroundService" },
        { id: "n_bg_2-6", title: "Service Types Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/guide/components/services#Types" },
        { id: "n_bg_2-7", title: "Deep Dive: Bound Services & IPC", type: "deep_dive", url: "https://developer.android.com/guide/components/bound-services" }
    ],
    "n_bg_3": [ // Broadcasts
        { id: "n_bg_3-1", title: "Broadcasts Overview", type: "official", url: "https://developer.android.com/guide/components/broadcasts" },
        { id: "n_bg_3-2", title: "Broadcast Receiver Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_bg_3-3", title: "Broadcast Receiver (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_bg_3-4", title: "Changes to Broadcasts", type: "article", url: "https://developer.android.com/guide/components/broadcasts#changes-system-broadcasts" },
        { id: "n_bg_3-5", title: "android-BroadcastReceiver", type: "github", url: "https://github.com/android/user-interface-samples" },
        { id: "n_bg_3-6", title: "System Broadcasts Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/guide/components/broadcasts#system-broadcasts" },
        { id: "n_bg_3-7", title: "Deep Dive: Context-registered receivers", type: "deep_dive", url: "https://developer.android.com/guide/components/broadcasts#context-registered-receivers" }
    ],
    // Publishing
    "n_pub_1": [ // App Signing
        { id: "n_pub_1-1", title: "Sign your app", type: "official", url: "https://developer.android.com/studio/publish/app-signing" },
        { id: "n_pub_1-2", title: "Generating Keystore and Signing", type: "video_en", url: "https://www.youtube.com/watch?v=jW_nK6O5F6w" },
        { id: "n_pub_1-3", title: "App Signing (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_pub_1-4", title: "Play App Signing explained", type: "article", url: "https://medium.com/androiddevelopers/play-app-signing-101-9a7edb762557" },
        { id: "n_pub_1-5", title: "apksigner", type: "github", url: "https://github.com/google/bundletool" },
        { id: "n_pub_1-6", title: "Keytool Commands Cheat Sheet", type: "cheat_sheet", url: "https://sslshopper.com/article-most-common-java-keytool-keystore-commands.html" },
        { id: "n_pub_1-7", title: "Deep Dive: v2/v3 Signature Schemes", type: "deep_dive", url: "https://source.android.com/security/apksigning" }
    ],
    "n_pub_2": [ // Play Console
        { id: "n_pub_2-1", title: "Play Console Help", type: "official", url: "https://support.google.com/googleplay/android-developer" },
        { id: "n_pub_2-2", title: "Publishing App on Play Store", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_pub_2-3", title: "Play Store Publish (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=H7sQnU-zCII" },
        { id: "n_pub_2-4", title: "App Store Optimization (ASO)", type: "article", url: "https://developer.android.com/distribute/marketing-tools/aso" },
        { id: "n_pub_2-5", title: "play-publisher", type: "github", url: "https://github.com/Triple-T/gradle-play-publisher" },
        { id: "n_pub_2-6", title: "Play Console Release Checklist", type: "cheat_sheet", url: "https://developer.android.com/studio/publish" },
        { id: "n_pub_2-7", title: "Deep Dive: Pre-launch reports", type: "deep_dive", url: "https://developer.android.com/studio/test/monkey" }
    ],
    "n_pub_3": [ // CI/CD
        { id: "n_pub_3-1", title: "Fastlane for Android", type: "official", url: "https://docs.fastlane.tools/getting-started/android/setup/" },
        { id: "n_pub_3-2", title: "CI/CD for Android with GitHub Actions", type: "video_en", url: "https://www.youtube.com/watch?v=XQMUMMAC2K0" },
        { id: "n_pub_3-3", title: "Android CI/CD (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=zJg5k6a3rJw" },
        { id: "n_pub_3-4", title: "Setting up GitHub Actions for Android", type: "article", url: "https://proandroiddev.com/github-actions-for-android-developers-6b5d92bd1d03" },
        { id: "n_pub_3-5", title: "android-github-actions", type: "github", url: "https://github.com/marketplace/actions/android-emulator-runner" },
        { id: "n_pub_3-6", title: "Fastlane Android Cheat Sheet", type: "cheat_sheet", url: "https://docs.fastlane.tools/actions/" },
        { id: "n_pub_3-7", title: "Deep Dive: Automated UI Testing in CI", type: "deep_dive", url: "https://developer.android.com/training/testing/fundamentals" }
    ]
};

function updateAndroidResources(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    for (const [topicId, resources] of Object.entries(resourcesMap)) {
        // Find the block for this topicId
        // The topic object looks like: "n_bas_1": { id: "n_bas_1", ... resources: [ ... ] },
        const topicRegex = new RegExp(`"${topicId}":\\s*{[^}]*?id:\\s*"${topicId}"[\\s\\S]*?resources:\\s*\\[[\\s\\S]*?\\]\\s*\\n\\s*}`, 'g');
        
        content = content.replace(topicRegex, (match) => {
            const resourcesJson = JSON.stringify(resources, null, 12).replace(/"([^"]+)":/g, '$1:');
            const blockRegex = /resources:\s*\[[\s\S]*?\]/;
            return match.replace(blockRegex, `resources: ${resourcesJson}`);
        });
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Android resources in ${filePath}`);
}

updateAndroidResources(path.join(__dirname, '..', 'src/data/content/android/topics.ts'));
