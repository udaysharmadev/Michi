import { TopicData } from "@/data/types";

export const topicsData: Record<string, TopicData> = {
    // --- 1. Android Basics & OS ---
    "n_bas_1": {
        title: "Android Architecture",
        description: "Understand the Android software stack, from the Linux kernel to the application framework.",
        resources: [
            { title: "Android Platform Architecture", type: "official", url: "https://developer.android.com/guide/platform" },
            { title: "Android Architecture Explained (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=ada99UCvELI" },
            { title: "Android Architecture in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=nNqJjY53DLU" },
            { title: "Android Architecture Layers Explained", type: "article", url: "https://www.geeksforgeeks.org/android-architecture/" },
            { title: "android/architecture-samples", type: "github", url: "https://github.com/android/architecture-samples" },
            { title: "Android Stack Visual Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/guide/platform#library-layer" },
            { title: "Android Internals by Jonathan Levin", type: "deep_dive", url: "https://source.android.com/docs/core/architecture" }
        ]
    },
    "n_bas_2": {
        title: "ART & Dalvik",
        description: "Learn about the Android Runtime (ART) and the Dalvik virtual machine that powers Android apps.",
        resources: [
            { title: "ART and Dalvik (Android Source)", type: "official", url: "https://source.android.com/docs/core/runtime" },
            { title: "ART vs Dalvik by Mark Allison", type: "video_en", url: "https://www.youtube.com/watch?v=cmyemvNmdzI" },
            { title: "ART Runtime in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=VALkq8XUW20" },
            { title: "Difference between Dalvik and ART", type: "article", url: "https://www.geeksforgeeks.org/difference-between-dalvik-and-art-in-android/" },
            { title: "dex2jar - DEX format tools", type: "github", url: "https://github.com/pxb1988/dex2jar" },
            { title: "Dalvik Executable Format Reference", type: "cheat_sheet", url: "https://source.android.com/docs/core/runtime/dex-format" },
            { title: "Garbage Collection in ART Deep Dive", type: "deep_dive", url: "https://source.android.com/docs/core/runtime/gc-debug" }
        ]
    },
    "n_bas_3": {
        title: "Android Permissions",
        description: "Learn how to request and handle runtime permissions for sensitive device resources.",
        resources: [
            { title: "Permissions on Android", type: "official", url: "https://developer.android.com/guide/topics/permissions/overview" },
            { title: "Android Runtime Permissions (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=9ZPVAQit8Sc" },
            { title: "Android Permissions in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=G4cOrT1mnb8" },
            { title: "Requesting Runtime Permissions", type: "article", url: "https://developer.android.com/training/permissions/requesting" },
            { title: "accompanist/permissions by Google", type: "github", url: "https://github.com/google/accompanist/tree/main/permissions" },
            { title: "Permissions Best Practices", type: "cheat_sheet", url: "https://developer.android.com/training/permissions/usage-notes" },
            { title: "Location Permission Changes in Android 10+", type: "deep_dive", url: "https://developer.android.com/training/location/permissions" }
        ]
    },
    // --- 2. Kotlin Fundamentals ---
    "n_kot_1": {
        title: "Kotlin Syntax & Basics",
        description: "Master the fundamental syntax of Kotlin: variables, functions, control flow, and collections.",
        resources: [
            { title: "Kotlin Basic Syntax Docs", type: "official", url: "https://kotlinlang.org/docs/basic-syntax.html" },
            { title: "Kotlin Crash Course (Traversy Media)", type: "video_en", url: "https://www.youtube.com/watch?v=kEEwTin0MRU" },
            { title: "Kotlin Full Course in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=kiHu0-Z6xHI" },
            { title: "Kotlin in 15 Minutes – GeeksForGeeks", type: "article", url: "https://www.geeksforgeeks.org/introduction-to-kotlin/" },
            { title: "Kotlin Koans (Official Interactive)", type: "github", url: "https://github.com/Kotlin/kotlin-koans" },
            { title: "Kotlin Cheat Sheet (devhints.io)", type: "cheat_sheet", url: "https://devhints.io/kotlin" },
            { title: "Java to Kotlin Interop Guide", type: "deep_dive", url: "https://developer.android.com/kotlin/interop" }
        ]
    },
    "n_kot_2": {
        title: "Null Safety",
        description: "Learn Kotlin's null safety system to eliminate NullPointerExceptions with operators like ?, !!, and ?:.",
        resources: [
            { title: "Null Safety in Kotlin (Official)", type: "official", url: "https://kotlinlang.org/docs/null-safety.html" },
            { title: "Kotlin Null Safety Explained (Android Developers)", type: "video_en", url: "https://www.youtube.com/watch?v=iYhOU9AuaFs" },
            { title: "Null Safety in Kotlin Hindi (Anuj Bhaiya)", type: "video_hi", url: "https://www.youtube.com/watch?v=9K8OxQurGMU" },
            { title: "Safe Calls and the Elvis Operator", type: "article", url: "https://www.geeksforgeeks.org/kotlin-null-safety/" },
            { title: "Kotlin Standard Library Reference", type: "github", url: "https://github.com/JetBrains/kotlin/tree/master/libraries/stdlib" },
            { title: "Nullable Types Quick Reference", type: "cheat_sheet", url: "https://kotlinlang.org/docs/null-safety.html#checking-for-null-in-conditions" },
            { title: "Kotlin Nullability & Java Interop", type: "deep_dive", url: "https://kotlinlang.org/docs/java-interop.html#nullability-annotations" }
        ]
    },
    "n_kot_3": {
        title: "Classes & Objects",
        description: "Deep dive into Kotlin OOP: data classes, sealed classes, companion objects, and extension functions.",
        resources: [
            { title: "Kotlin Classes Docs", type: "official", url: "https://kotlinlang.org/docs/classes.html" },
            { title: "OOP in Kotlin (Coding in Flow)", type: "video_en", url: "https://www.youtube.com/watch?v=ZSyfYfEFVnM" },
            { title: "Kotlin OOP in Hindi (Smart Programming)", type: "video_hi", url: "https://www.youtube.com/watch?v=kiHu0-Z6xHI" },
            { title: "Kotlin Data Classes Explained", type: "article", url: "https://kotlinlang.org/docs/data-classes.html" },
            { title: "skydoves/kotlin-bootcamp", type: "github", url: "https://github.com/skydoves/kotlin-bootcamp" },
            { title: "Kotlin Classes Quick Reference", type: "cheat_sheet", url: "https://www.raywenderlich.com/4951992-kotlin-cheat-sheet-and-quick-reference" },
            { title: "Deep Dive: Sealed Classes & When Expressions", type: "deep_dive", url: "https://kotlinlang.org/docs/sealed-classes.html" }
        ]
    },
    "n_kot_4": {
        title: "Coroutines",
        description: "Write asynchronous, non-blocking code using Kotlin Coroutines with structured concurrency.",
        resources: [
            { title: "Kotlin Coroutines Guide (Official)", type: "official", url: "https://kotlinlang.org/docs/coroutines-guide.html" },
            { title: "Kotlin Coroutines (Phillip Lackner - full)", type: "video_en", url: "https://www.youtube.com/watch?v=lmRzRKIsn1g" },
            { title: "Coroutines in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=DVvLFGZFmbI" },
            { title: "Coroutines on Android (Android Developers)", type: "article", url: "https://developer.android.com/kotlin/coroutines" },
            { title: "kotlinx.coroutines by JetBrains", type: "github", url: "https://github.com/Kotlin/kotlinx.coroutines" },
            { title: "Coroutines Cheat Sheet (devhints.io)", type: "cheat_sheet", url: "https://devhints.io/kotlin-coroutines" },
            { title: "Exception Handling in Coroutines", type: "deep_dive", url: "https://kotlinlang.org/docs/exception-handling.html" }
        ]
    },
    // --- 3. Android Tooling ---
    "n_tool_1": {
        title: "Android Studio IDE",
        description: "Set up and navigate Android Studio, the official IDE for Android development.",
        resources: [
            { title: "Meet Android Studio", type: "official", url: "https://developer.android.com/studio/intro" },
            { title: "Android Studio Tutorial (Programming with Mosh)", type: "video_en", url: "https://www.youtube.com/watch?v=QCWdu3iUaeE" },
            { title: "Android Studio Setup in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=ubwEU7gZAgg" },
            { title: "10 Android Studio Tips You Don't Know", type: "article", url: "https://medium.com/androiddevelopers/10-android-studio-tips-tricks-you-might-not-know-about-4c23e2dd3b36" },
            { title: "JetBrains/android (Platform Code)", type: "github", url: "https://github.com/JetBrains/android" },
            { title: "Android Studio Keyboard Shortcuts", type: "cheat_sheet", url: "https://developer.android.com/studio/intro/keyboard-shortcuts" },
            { title: "Android Profiler Deep Dive", type: "deep_dive", url: "https://developer.android.com/studio/profile" }
        ]
    },
    "n_tool_2": {
        title: "Gradle Build System",
        description: "Understand Gradle scripts, build variants, dependencies, and the Android build pipeline.",
        resources: [
            { title: "Configure Your Build (Android Docs)", type: "official", url: "https://developer.android.com/studio/build" },
            { title: "Gradle for Android (Coding in Flow)", type: "video_en", url: "https://www.youtube.com/watch?v=-dtcEMLNmn0" },
            { title: "Gradle Build in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=5s00nKEbCzU" },
            { title: "Understanding Build Variants", type: "article", url: "https://developer.android.com/studio/build/build-variants" },
            { title: "android/gradle-recipes", type: "github", url: "https://github.com/android/gradle-recipes" },
            { title: "Gradle DSL Reference Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/reference/tools/gradle-api" },
            { title: "Gradle Plugin Development Guide", type: "deep_dive", url: "https://docs.gradle.org/current/userguide/custom_plugins.html" }
        ]
    },
    "n_tool_3": {
        title: "Android Emulator & ADB",
        description: "Run your apps on virtual devices and use ADB to debug, install APKs, and inspect your device.",
        resources: [
            { title: "Run apps on Android Emulator", type: "official", url: "https://developer.android.com/studio/run/emulator" },
            { title: "ADB Commands Every Developer Should Know", type: "video_en", url: "https://www.youtube.com/watch?v=BERHIgpwXus" },
            { title: "ADB and Fastboot in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=ubwEU7gZAgg" },
            { title: "Android Debug Bridge (ADB) Docs", type: "article", url: "https://developer.android.com/tools/adb" },
            { title: "mzlogin/awesome-adb", type: "github", url: "https://github.com/mzlogin/awesome-adb" },
            { title: "ADB Command Cheat Sheet", type: "cheat_sheet", url: "https://www.automatetheplanet.com/adb-cheat-sheet/" },
            { title: "Emulator Architecture Under the Hood", type: "deep_dive", url: "https://developer.android.com/studio/run/emulator-architecture" }
        ]
    },
    // --- 4. UI Development ---
    "n_ui_1": {
        title: "XML Layouts (Legacy)",
        description: "Build UIs with XML layout files, Views, ViewGroups, and ConstraintLayout.",
        resources: [
            { title: "Layouts Overview (Android Docs)", type: "official", url: "https://developer.android.com/guide/topics/ui/declaring-layout" },
            { title: "ConstraintLayout Tutorial (Coding in Flow)", type: "video_en", url: "https://www.youtube.com/watch?v=Gdko6n_x1NQ" },
            { title: "Android XML UI in Hindi (Hacking with Android)", type: "video_hi", url: "https://www.youtube.com/watch?v=k2UWrEEd-lY" },
            { title: "Building Interfaces with ConstraintLayout", type: "article", url: "https://medium.com/google-developers/building-interfaces-with-constraintlayout-3930262029c" },
            { title: "googlecodelabs/android-constraintlayout", type: "github", url: "https://github.com/googlecodelabs/android-constraintlayout" },
            { title: "ConstraintLayout Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout" },
            { title: "Custom Views & Drawing on Canvas", type: "deep_dive", url: "https://developer.android.com/guide/topics/ui/custom-components" }
        ]
    },
    "n_ui_2": {
        title: "Jetpack Compose",
        description: "Build native Android UIs with Kotlin using the modern declarative Jetpack Compose framework.",
        resources: [
            { title: "Jetpack Compose Pathway (Official)", type: "official", url: "https://developer.android.com/courses/pathways/compose" },
            { title: "Jetpack Compose Crash Course (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=6_wK_Ud8--0" },
            { title: "Jetpack Compose in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=fqQWUmVHNDI" },
            { title: "State and Jetpack Compose", type: "article", url: "https://developer.android.com/jetpack/compose/state" },
            { title: "android/compose-samples", type: "github", url: "https://github.com/android/compose-samples" },
            { title: "Compose Playground / Cheat Sheet", type: "cheat_sheet", url: "https://foso.github.io/Jetpack-Compose-Playground/" },
            { title: "Compose Render Phases Deep Dive", type: "deep_dive", url: "https://developer.android.com/jetpack/compose/phases" }
        ]
    },
    "n_ui_3": {
        title: "Material Design 3",
        description: "Apply Google's Material Design 3 design system for consistent, accessible, modern UIs.",
        resources: [
            { title: "Material Design 3 Guidelines", type: "official", url: "https://m3.material.io/" },
            { title: "Material Design 3 in Compose (Android)", type: "video_en", url: "https://www.youtube.com/watch?v=h_JYW2hdI8U" },
            { title: "Material 3 Components in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=xj7oZYpNesc" },
            { title: "Migrating to Material 3 in Compose", type: "article", url: "https://developer.android.com/jetpack/compose/designsystems/material3" },
            { title: "material-components/material-components-android", type: "github", url: "https://github.com/material-components/material-components-android" },
            { title: "Material 3 Color Roles Reference", type: "cheat_sheet", url: "https://m3.material.io/styles/color/roles" },
            { title: "Dynamic Color System Deep Dive", type: "deep_dive", url: "https://m3.material.io/styles/color/dynamic-color/overview" }
        ]
    },
    "n_ui_4": {
        title: "RecyclerView / LazyColumn",
        description: "Efficiently display large, scrollable lists of data with RecyclerView or Compose's LazyColumn.",
        resources: [
            { title: "Lists and grids in Compose", type: "official", url: "https://developer.android.com/jetpack/compose/lists" },
            { title: "LazyColumn & LazyRow Tutorial (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=z2bS2btp_AI" },
            { title: "RecyclerView in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=yPL13Iwy6oM" },
            { title: "Migrating from RecyclerView to LazyColumn", type: "article", url: "https://developer.android.com/jetpack/compose/migrate/migration-scenarios/recycler-view" },
            { title: "android/architecture-components-samples Paging", type: "github", url: "https://github.com/android/architecture-components-samples/tree/main/PagingSample" },
            { title: "LazyColumn Documentation Reference", type: "cheat_sheet", url: "https://developer.android.com/jetpack/compose/lists#lazy-lists" },
            { title: "Paging 3 Architecture Deep Dive", type: "deep_dive", url: "https://developer.android.com/topic/libraries/architecture/paging/v3-overview" }
        ]
    },
    // --- 5. App Components ---
    "n_app_1": {
        title: "Activities & Lifecycle",
        description: "Understand the Activity lifecycle, handle configuration changes, and save/restore UI state.",
        resources: [
            { title: "Introduction to Activities", type: "official", url: "https://developer.android.com/guide/components/activities/intro-activities" },
            { title: "Activity Lifecycle Explained (Coding in Flow)", type: "video_en", url: "https://www.youtube.com/watch?v=WHilu0MiRSs" },
            { title: "Activity Lifecycle in Hindi (Smart Programming)", type: "video_hi", url: "https://www.youtube.com/watch?v=DVvLFGZFmbI" },
            { title: "The Activity Lifecycle Explained", type: "article", url: "https://developer.android.com/guide/components/activities/activity-lifecycle" },
            { title: "xxv/android-lifecycle (Visual Diagram)", type: "github", url: "https://github.com/xxv/android-lifecycle" },
            { title: "Activity Lifecycle Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/guide/components/activities/activity-lifecycle#alc" },
            { title: "Saving UI State Deep Dive", type: "deep_dive", url: "https://developer.android.com/topic/libraries/architecture/saving-states" }
        ]
    },
    "n_app_2": {
        title: "Fragments",
        description: "Use Fragments to modularize your UI for flexible, multi-pane layouts and tablet-friendly apps.",
        resources: [
            { title: "Fragments Overview (Android Docs)", type: "official", url: "https://developer.android.com/guide/fragments" },
            { title: "Android Fragments Full Tutorial (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=Rs-d-2FITWo" },
            { title: "Fragments in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=H18PcmNEM2k" },
            { title: "Fragment Lifecycle", type: "article", url: "https://developer.android.com/guide/fragments/lifecycle" },
            { title: "android/NavigationAdvancedSample", type: "github", url: "https://github.com/android/architecture-components-samples/tree/main/NavigationAdvancedSample" },
            { title: "Fragment Transactions Cheat Sheet", type: "cheat_sheet", url: "https://developer.android.com/guide/fragments/transactions" },
            { title: "FragmentManager & Back Stack", type: "deep_dive", url: "https://developer.android.com/guide/fragments/fragmentmanager" }
        ]
    },
    "n_app_3": {
        title: "Intents & Navigation",
        description: "Use Intents to communicate between components and implement app navigation with Jetpack Navigation.",
        resources: [
            { title: "Intents and Intent Filters", type: "official", url: "https://developer.android.com/guide/components/intents-filters" },
            { title: "Implicit vs Explicit Intents (CodingWithMitch)", type: "video_en", url: "https://www.youtube.com/watch?v=aLeWGcwSs7M" },
            { title: "Intents in Hindi (Anuj Bhaiya)", type: "video_hi", url: "https://www.youtube.com/watch?v=I1y8hNsJLxI" },
            { title: "Common Intents (Official Reference)", type: "article", url: "https://developer.android.com/guide/components/intents-common" },
            { title: "IntentPlayground sample", type: "github", url: "https://github.com/android/user-interface-samples/tree/main/IntentPlayground" },
            { title: "Intent Actions Quick Reference", type: "cheat_sheet", url: "https://gist.github.com/lopspower/1a6fbaad38a7c1dd3cd4" },
            { title: "Navigation Component Deep Dive", type: "deep_dive", url: "https://developer.android.com/guide/navigation" }
        ]
    },
    // --- 6. Data Storage ---
    "n_data_1": {
        title: "Room Database (SQLite)",
        description: "Use the Room persistence library to store structured data locally in an SQLite database.",
        resources: [
            { title: "Save data in a local database using Room", type: "official", url: "https://developer.android.com/training/data-storage/room" },
            { title: "Room DB Full Tutorial (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=yPL13Iwy6oM" },
            { title: "Room Database in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=DVvLFGZFmbI" },
            { title: "7 Steps to Room (Android Developers blog)", type: "article", url: "https://medium.com/androiddevelopers/7-steps-to-room-27a5fe5f99b2" },
            { title: "googlecodelabs/android-room-with-a-view", type: "github", url: "https://github.com/googlecodelabs/android-room-with-a-view" },
            { title: "Room Annotations Reference", type: "cheat_sheet", url: "https://developer.android.com/training/data-storage/room/defining-data" },
            { title: "Room Database Migrations Deep Dive", type: "deep_dive", url: "https://developer.android.com/training/data-storage/room/migrating-db-versions" }
        ]
    },
    "n_data_2": {
        title: "DataStore / SharedPreferences",
        description: "Store key-value pairs and typed objects asynchronously with Jetpack DataStore.",
        resources: [
            { title: "DataStore Official Docs", type: "official", url: "https://developer.android.com/topic/libraries/architecture/datastore" },
            { title: "Jetpack DataStore Tutorial (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=LBUd6KHNBwg" },
            { title: "DataStore in Hindi (Smart Programming)", type: "video_hi", url: "https://www.youtube.com/watch?v=A5x35G2pAtw" },
            { title: "Prefer Storing Data with DataStore", type: "article", url: "https://medium.com/androiddevelopers/prefer-storing-data-with-jetpack-datastore-30d885a060e2" },
            { title: "googlecodelabs/android-datastore", type: "github", url: "https://github.com/googlecodelabs/android-datastore" },
            { title: "Preferences DataStore Reference", type: "cheat_sheet", url: "https://developer.android.com/topic/libraries/architecture/datastore#preferences-datastore" },
            { title: "Proto DataStore Deep Dive", type: "deep_dive", url: "https://developer.android.com/topic/libraries/architecture/datastore#proto-datastore" }
        ]
    },
    "n_data_3": {
        title: "File Storage & MediaStore",
        description: "Read/write files and media using Android's scoped storage model and MediaStore API.",
        resources: [
            { title: "Data and file storage overview", type: "official", url: "https://developer.android.com/training/data-storage" },
            { title: "Scoped Storage Explained (Android Developers)", type: "video_en", url: "https://www.youtube.com/watch?v=sswLpKeAoxs" },
            { title: "Android File Storage in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=A5x35G2pAtw" },
            { title: "Understanding Scoped Storage", type: "article", url: "https://medium.com/androiddevelopers/scoped-storage-in-android-c92a4ae45384" },
            { title: "android/storage-samples", type: "github", url: "https://github.com/android/storage-samples" },
            { title: "Storage Best Practices Reference", type: "cheat_sheet", url: "https://developer.android.com/training/data-storage/app-specific" },
            { title: "MediaStore API Deep Dive", type: "deep_dive", url: "https://developer.android.com/training/data-storage/shared/media" }
        ]
    },
    // --- 7. Networking ---
    "n_net_1": {
        title: "Retrofit & OkHttp",
        description: "Make type-safe HTTP calls to REST APIs using Square's Retrofit and OkHttp libraries.",
        resources: [
            { title: "Retrofit Official Documentation", type: "official", url: "https://square.github.io/retrofit/" },
            { title: "Retrofit with Coroutines (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=t6Sql3WMAnk" },
            { title: "Retrofit in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=ubwEU7gZAgg" },
            { title: "Using Retrofit with Coroutines", type: "article", url: "https://developer.android.com/kotlin/coroutines" },
            { title: "square/retrofit", type: "github", url: "https://github.com/square/retrofit" },
            { title: "Retrofit Annotations Cheat Sheet", type: "cheat_sheet", url: "https://square.github.io/retrofit/#built-in-converters" },
            { title: "OkHttp Interceptors Deep Dive", type: "deep_dive", url: "https://square.github.io/okhttp/features/interceptors/" }
        ]
    },
    "n_net_2": {
        title: "JSON Parsing (Moshi/Gson)",
        description: "Deserialize API responses into Kotlin data classes using Moshi or Gson converters.",
        resources: [
            { title: "Kotlinx.serialization (Official)", type: "official", url: "https://kotlinlang.org/docs/serialization.html" },
            { title: "Moshi vs Gson - Which to Use?", type: "video_en", url: "https://www.youtube.com/watch?v=z5RvwKz6DsA" },
            { title: "JSON Parsing in Android Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=JU6GkewdNcA" },
            { title: "Moshi vs Gson in Android (ProAndroidDev)", type: "article", url: "https://proandroiddev.com/moshi-vs-gson-in-android-5f8ed717b0d4" },
            { title: "square/moshi", type: "github", url: "https://github.com/square/moshi" },
            { title: "Moshi Built-in Adapters Reference", type: "cheat_sheet", url: "https://github.com/square/moshi#built-in-type-adapters" },
            { title: "Custom JsonAdapter Deep Dive", type: "deep_dive", url: "https://github.com/square/moshi#custom-type-adapters" }
        ]
    },
    "n_net_3": {
        title: "Handling Network States",
        description: "Detect connectivity changes and handle offline scenarios gracefully in your app.",
        resources: [
            { title: "Manage network usage (Android Docs)", type: "official", url: "https://developer.android.com/training/basics/network-ops/managing" },
            { title: "Monitoring Network State (Android Developers)", type: "video_en", url: "https://www.youtube.com/watch?v=X0OBAPc3dpM" },
            { title: "Network Handling in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=2PoxcDrDLjI" },
            { title: "Reading Network State (Android Guide)", type: "article", url: "https://developer.android.com/training/basics/network-ops/reading-network-state" },
            { title: "android/connectivity-samples", type: "github", url: "https://github.com/android/connectivity-samples" },
            { title: "NetworkCapabilities API Reference", type: "cheat_sheet", url: "https://developer.android.com/reference/android/net/NetworkCapabilities" },
            { title: "OkHttp Interceptors for Offline Caching", type: "deep_dive", url: "https://square.github.io/okhttp/features/interceptors/" }
        ]
    },
    // --- 8. Architecture Patterns ---
    "n_arch_1": {
        title: "MVVM Pattern",
        description: "Use ViewModel, LiveData, and StateFlow to separate UI from business logic in the MVVM pattern.",
        resources: [
            { title: "Guide to App Architecture (Android)", type: "official", url: "https://developer.android.com/topic/architecture" },
            { title: "MVVM Architecture Tutorial (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=-xTqfilaYow" },
            { title: "MVVM Pattern in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=97BRLkicQd0" },
            { title: "ViewModel Overview", type: "article", url: "https://developer.android.com/topic/libraries/architecture/viewmodel" },
            { title: "android/architecture-samples", type: "github", url: "https://github.com/android/architecture-samples" },
            { title: "Recommended App Architecture Guide", type: "cheat_sheet", url: "https://developer.android.com/topic/architecture#recommended-app-arch" },
            { title: "StateFlow and SharedFlow Deep Dive", type: "deep_dive", url: "https://developer.android.com/kotlin/flow/stateflow-and-sharedflow" }
        ]
    },
    "n_arch_2": {
        title: "Clean Architecture",
        description: "Structure apps into Data, Domain, and Presentation layers for testable, maintainable codebases.",
        resources: [
            { title: "Clean Architecture by Uncle Bob", type: "official", url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" },
            { title: "Clean Architecture for Android (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=sBAB_EKYPYs" },
            { title: "Clean Architecture in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=fqQWUmVHNDI" },
            { title: "Clean Architecture on Android (ProAndroidDev)", type: "article", url: "https://proandroiddev.com/clean-architecture-data-flow-dependency-rule-615ffdd79e29" },
            { title: "android10/Android-CleanArchitecture", type: "github", url: "https://github.com/android10/Android-CleanArchitecture" },
            { title: "Domain Layer Guide", type: "cheat_sheet", url: "https://developer.android.com/topic/architecture/domain-layer" },
            { title: "Layered Architecture Data Flow Deep Dive", type: "deep_dive", url: "https://developer.android.com/topic/architecture/data-layer" }
        ]
    },
    "n_arch_3": {
        title: "Dependency Injection (Hilt/Dagger)",
        description: "Use Hilt (built on Dagger 2) to inject dependencies automatically and write more testable code.",
        resources: [
            { title: "Dependency injection in Android", type: "official", url: "https://developer.android.com/training/dependency-injection" },
            { title: "Hilt Dependency Injection (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=bbMsuI2p1DQ" },
            { title: "Dagger Hilt in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=H_Eg5VG54Ik" },
            { title: "Dependency Injection on Android with Hilt", type: "article", url: "https://medium.com/androiddevelopers/dependency-injection-on-android-with-hilt-67b6031e62d" },
            { title: "googlecodelabs/android-hilt", type: "github", url: "https://github.com/googlecodelabs/android-hilt" },
            { title: "Hilt Annotations Reference", type: "cheat_sheet", url: "https://developer.android.com/training/dependency-injection/hilt-android#generated-components" },
            { title: "Hilt Components & Scopes", type: "deep_dive", url: "https://developer.android.com/training/dependency-injection/hilt-android#hilt-components" }
        ]
    },
    // --- 9. Background Work ---
    "n_bg_1": {
        title: "WorkManager",
        description: "Schedule deferrable, guaranteed background tasks that survive app restarts using WorkManager.",
        resources: [
            { title: "WorkManager API Guide", type: "official", url: "https://developer.android.com/topic/libraries/architecture/workmanager" },
            { title: "WorkManager Full Tutorial (Coding in Flow)", type: "video_en", url: "https://www.youtube.com/watch?v=A2JetouoNSc" },
            { title: "WorkManager in Hindi (Smart Programming)", type: "video_hi", url: "https://www.youtube.com/watch?v=sPPQ8lTsdhM" },
            { title: "WorkManager Basics (Android Developers blog)", type: "article", url: "https://medium.com/androiddevelopers/workmanager-basics-beba51e94048" },
            { title: "android/architecture-components-samples WorkManager", type: "github", url: "https://github.com/android/architecture-components-samples/tree/main/WorkManagerSample" },
            { title: "WorkManager Constraints Reference", type: "cheat_sheet", url: "https://developer.android.com/topic/libraries/architecture/workmanager/how-to/define-work" },
            { title: "Custom WorkManager Configuration", type: "deep_dive", url: "https://developer.android.com/topic/libraries/architecture/workmanager/advanced/custom-configuration" }
        ]
    },
    "n_bg_2": {
        title: "Foreground Services",
        description: "Run long-running operations (like music playback or tracking) that users are aware of.",
        resources: [
            { title: "Services Overview (Android Docs)", type: "official", url: "https://developer.android.com/guide/components/services" },
            { title: "Foreground Service Tutorial (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=YZL-_XJSClc" },
            { title: "Android Services in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=Hbtue1RQIo4" },
            { title: "Background Execution Limits (Android 8+)", type: "article", url: "https://developer.android.com/about/versions/oreo/background" },
            { title: "android/user-interface-samples ForegroundService", type: "github", url: "https://github.com/android/user-interface-samples/tree/main/ForegroundService" },
            { title: "Service Types Reference", type: "cheat_sheet", url: "https://developer.android.com/guide/components/foreground-services" },
            { title: "Bound Services & AIDL/IPC", type: "deep_dive", url: "https://developer.android.com/guide/components/bound-services" }
        ]
    },
    "n_bg_3": {
        title: "Broadcast Receivers",
        description: "Listen for and respond to system-wide or app-specific broadcast announcements.",
        resources: [
            { title: "Broadcasts Overview (Android Docs)", type: "official", url: "https://developer.android.com/guide/components/broadcasts" },
            { title: "BroadcastReceiver Tutorial (CodingWithMitch)", type: "video_en", url: "https://www.youtube.com/watch?v=LoH3K4wO5q0" },
            { title: "Broadcast Receiver in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=kZu6gCxK3Xs" },
            { title: "Changes to System Broadcasts", type: "article", url: "https://developer.android.com/guide/components/broadcasts#changes-system-broadcasts" },
            { title: "android/user-interface-samples", type: "github", url: "https://github.com/android/user-interface-samples" },
            { title: "System Broadcasts List Reference", type: "cheat_sheet", url: "https://developer.android.com/guide/components/broadcasts#system-broadcasts" },
            { title: "Context-Registered Receivers Deep Dive", type: "deep_dive", url: "https://developer.android.com/guide/components/broadcasts#context-registered-receivers" }
        ]
    },
    // --- 10. Publishing ---
    "n_pub_1": {
        title: "App Signing",
        description: "Generate keystores and sign your APK/AAB for release on the Google Play Store.",
        resources: [
            { title: "Sign your app (Android Docs)", type: "official", url: "https://developer.android.com/studio/publish/app-signing" },
            { title: "How to Sign & Generate a Release APK (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=odv_1fxt9BI" },
            { title: "App Signing in Hindi (Smart Programming)", type: "video_hi", url: "https://www.youtube.com/watch?v=92sKMUmv_wo" },
            { title: "Play App Signing 101 (Android Developers blog)", type: "article", url: "https://medium.com/androiddevelopers/play-app-signing-101-9a7edb762557" },
            { title: "google/bundletool", type: "github", url: "https://github.com/google/bundletool" },
            { title: "Keytool Commands Reference", type: "cheat_sheet", url: "https://www.sslshopper.com/article-most-common-java-keytool-keystore-commands.html" },
            { title: "APK v2/v3 Signature Schemes", type: "deep_dive", url: "https://source.android.com/docs/security/features/apksigning" }
        ]
    },
    "n_pub_2": {
        title: "Google Play Console",
        description: "Publish, manage, and monitor your app on the Google Play Store using the Play Console.",
        resources: [
            { title: "Play Console Help Center", type: "official", url: "https://support.google.com/googleplay/android-developer" },
            { title: "How to Publish an App on Google Play (Phillip Lackner)", type: "video_en", url: "https://www.youtube.com/watch?v=yetSqJucXVs" },
            { title: "Play Store Publish in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=hAwemHceBbY" },
            { title: "App Store Optimization Guide", type: "article", url: "https://developer.android.com/distribute/best-practices/launch/product-page" },
            { title: "Triple-T/gradle-play-publisher", type: "github", url: "https://github.com/Triple-T/gradle-play-publisher" },
            { title: "Play Console Release Checklist", type: "cheat_sheet", url: "https://developer.android.com/distribute/best-practices/launch/launch-checklist" },
            { title: "Pre-launch Reports & Firebase Test Lab", type: "deep_dive", url: "https://developer.android.com/distribute/best-practices/launch/test-tracks" }
        ]
    },
    "n_pub_3": {
        title: "CI/CD (GitHub Actions/Fastlane)",
        description: "Automate building, testing, and deploying your Android app using GitHub Actions and Fastlane.",
        resources: [
            { title: "Fastlane for Android", type: "official", url: "https://docs.fastlane.tools/getting-started/android/setup/" },
            { title: "CI/CD for Android with GitHub Actions (Aryan Mittal)", type: "video_en", url: "https://www.youtube.com/watch?v=YLtlz88zrLg" },
            { title: "Android CI/CD in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=y7S2oSjJ8PA" },
            { title: "GitHub Actions for Android Developers", type: "article", url: "https://proandroiddev.com/github-actions-for-android-developers-6b5d92bd1d03" },
            { title: "ReactiveCircus/android-emulator-runner", type: "github", url: "https://github.com/ReactiveCircus/android-emulator-runner" },
            { title: "Fastlane Actions Reference", type: "cheat_sheet", url: "https://docs.fastlane.tools/actions/" },
            { title: "Automated UI Testing in CI with Emulator", type: "deep_dive", url: "https://developer.android.com/training/testing/fundamentals" }
        ]
    }
};
