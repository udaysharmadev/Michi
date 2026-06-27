import { TopicData } from "@/data/types";

export const topicsData: Record<string, TopicData> = {
    // --- 1. Mobile Ecosystem ---
    "n_me_1": {
        title: "Native vs Cross-platform",
        description: "Understand the differences, pros, and cons of native (Swift/Kotlin) versus cross-platform (React Native, Flutter) development.",
        resources: [
            { title: "React Native Official Docs", type: "official", url: "https://reactnative.dev/docs/getting-started" },
            { title: "Flutter vs React Native in 2024 (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=RUT3h1kNSvQ" },
            { title: "React Native vs Flutter in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=VLLGJnv6zSM" },
            { title: "Native vs Cross-Platform: The Full Comparison", type: "article", url: "https://docs.flutter.dev/get-started/flutter-for/react-native-devs" },
            { title: "jondot/awesome-react-native", type: "github", url: "https://github.com/jondot/awesome-react-native" },
            { title: "Flutter for React Native Devs (Official)", type: "cheat_sheet", url: "https://docs.flutter.dev/get-started/flutter-for/react-native-devs" },
            { title: "React Native New Architecture Overview", type: "deep_dive", url: "https://reactnative.dev/docs/the-new-architecture/landing-page" }
        ]
    },
    "n_me_2": {
        title: "Mobile OS Architecture",
        description: "Learn how iOS and Android are structured: kernel, HAL, frameworks, and runtime environments.",
        resources: [
            { title: "Android Platform Architecture", type: "official", url: "https://developer.android.com/guide/platform" },
            { title: "Android vs iOS Architecture Explained", type: "video_en", url: "https://www.youtube.com/watch?v=ada99UCvELI" },
            { title: "Android Architecture in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=ada99UCvELI" },
            { title: "iOS vs Android Architecture Differences", type: "article", url: "https://www.geeksforgeeks.org/difference-between-android-and-ios-architecture/" },
            { title: "aosp-mirror/platform_frameworks_base", type: "github", url: "https://github.com/aosp-mirror/platform_frameworks_base" },
            { title: "Android Stack Architecture Layers", type: "cheat_sheet", url: "https://developer.android.com/guide/platform#library-layer" },
            { title: "Deep Dive: Android Core Architecture", type: "deep_dive", url: "https://source.android.com/docs/core/architecture" }
        ]
    },
    "n_me_3": {
        title: "App Lifecycle",
        description: "Understand the states a mobile app moves through: launch, foreground, background, and termination.",
        resources: [
            { title: "AppState API - React Native", type: "official", url: "https://reactnative.dev/docs/appstate" },
            { title: "Activity Lifecycle Explained (Coding in Flow)", type: "video_en", url: "https://www.youtube.com/watch?v=1sjA4e_wG3w" },
            { title: "App Lifecycle in Hindi (Smart Programming)", type: "video_hi", url: "https://www.youtube.com/watch?v=1sjA4e_wG3w" },
            { title: "iOS App Lifecycle (Apple Docs)", type: "article", url: "https://developer.apple.com/documentation/uikit/app_and_environment/managing_your_app_s_life_cycle" },
            { title: "xxv/android-lifecycle (Visual Diagram)", type: "github", url: "https://github.com/xxv/android-lifecycle" },
            { title: "Android Activity Lifecycle Reference", type: "cheat_sheet", url: "https://developer.android.com/guide/components/activities/activity-lifecycle" },
            { title: "State Restoration Across Restarts", type: "deep_dive", url: "https://developer.android.com/topic/libraries/architecture/saving-states" }
        ]
    },
    // --- 2. Programming Foundations ---
    "n_pf_1": {
        title: "JavaScript for Mobile (React Native)",
        description: "Build the JavaScript/TypeScript foundation needed to work effectively with React Native.",
        resources: [
            { title: "React Native - JavaScript Environment", type: "official", url: "https://reactnative.dev/docs/javascript-environment" },
            { title: "JavaScript for React Native (Net Ninja)", type: "video_en", url: "https://www.youtube.com/watch?v=ML0DuF9Qgis" },
            { title: "JavaScript Full Course in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=JKccS9k56_I" },
            { title: "JavaScript Syntax Transformers in React Native", type: "article", url: "https://reactnative.dev/docs/javascript-environment#javascript-syntax-transformers" },
            { title: "react-native-community/react-native-template-typescript", type: "github", url: "https://github.com/react-native-community/react-native-template-typescript" },
            { title: "TypeScript Cheat Sheet (devhints.io)", type: "cheat_sheet", url: "https://devhints.io/typescript" },
            { title: "Hermes JavaScript Engine Deep Dive", type: "deep_dive", url: "https://engineering.fb.com/2019/07/12/android/hermes/" }
        ]
    },
    "n_pf_2": {
        title: "Dart for Flutter",
        description: "Learn the Dart programming language: syntax, types, async/await, and OOP concepts for Flutter development.",
        resources: [
            { title: "Dart Language Tour (Official)", type: "official", url: "https://dart.dev/language" },
            { title: "Dart Programming Full Course (Traversy Media)", type: "video_en", url: "https://www.youtube.com/watch?v=CzRQ9mnmh44" },
            { title: "Dart Full Course in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=nUGXH5p7-P0" },
            { title: "Dart Null Safety Guide", type: "article", url: "https://dart.dev/null-safety" },
            { title: "dart-lang/sdk", type: "github", url: "https://github.com/dart-lang/sdk" },
            { title: "Dart Cheat Sheet (devhints.io)", type: "cheat_sheet", url: "https://devhints.io/dart" },
            { title: "Dart Isolates & Concurrency", type: "deep_dive", url: "https://dart.dev/language/isolates" }
        ]
    },
    "n_pf_3": {
        title: "Kotlin / Swift Basics",
        description: "Learn enough Kotlin (Android) or Swift (iOS) to understand native module integrations and platform-specific code.",
        resources: [
            { title: "Kotlin Basic Syntax (Official)", type: "official", url: "https://kotlinlang.org/docs/basic-syntax.html" },
            { title: "Kotlin vs Swift - Side by Side Comparison", type: "video_en", url: "https://www.youtube.com/watch?v=xT8oP0wy-A0" },
            { title: "Kotlin Basics in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=13Zt5xDHYgQ" },
            { title: "Swift is like Kotlin – Comparison", type: "article", url: "https://nilhcem.com/swift-is-like-kotlin/" },
            { title: "Kotlin/kotlin-koans", type: "github", url: "https://github.com/Kotlin/kotlin-koans" },
            { title: "Kotlin & Swift Syntax Cheat Sheet", type: "cheat_sheet", url: "https://nilhcem.com/swift-is-like-kotlin/" },
            { title: "Native Modules in React Native (Official)", type: "deep_dive", url: "https://reactnative.dev/docs/native-modules-intro" }
        ]
    },
    // --- 3. Cross-Platform Frameworks ---
    "n_cp_1": {
        title: "React Native Core",
        description: "Build cross-platform mobile apps with React Native using core components, JSX, and the Bridge.",
        resources: [
            { title: "React Native Core Components & APIs", type: "official", url: "https://reactnative.dev/docs/components-and-apis" },
            { title: "React Native Crash Course (Traversy Media)", type: "video_en", url: "https://www.youtube.com/watch?v=-d3ti_YW-OM" },
            { title: "React Native Full Course in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=JKccS9k56_I" },
            { title: "Intro to React Native Core Components", type: "article", url: "https://reactnative.dev/docs/intro-react-native-components" },
            { title: "oblador/react-native-vector-icons", type: "github", url: "https://github.com/oblador/react-native-vector-icons" },
            { title: "React Native Core APIs Reference", type: "cheat_sheet", url: "https://reactnative.dev/docs/components-and-apis" },
            { title: "React Native JSI & New Architecture Deep Dive", type: "deep_dive", url: "https://reactnative.dev/docs/the-new-architecture/landing-page" }
        ]
    },
    "n_cp_2": {
        title: "Flutter Widgets",
        description: "Build UIs with Flutter's widget tree, understanding stateless vs stateful widgets, and layouts.",
        resources: [
            { title: "Flutter Widget Catalog (Official)", type: "official", url: "https://docs.flutter.dev/ui/widgets" },
            { title: "Flutter Crash Course (Traversy Media)", type: "video_en", url: "https://www.youtube.com/watch?v=WOvj84xq_fc" },
            { title: "Flutter Full Course in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=dbg8RUithw0" },
            { title: "Stateless vs Stateful Widgets Guide", type: "article", url: "https://docs.flutter.dev/ui/interactive" },
            { title: "flutter/samples", type: "github", url: "https://github.com/flutter/samples" },
            { title: "Flutter Widget Cheat Sheet (GitHub)", type: "cheat_sheet", url: "https://github.com/Temidtech/Flutter-Cheat-Sheet" },
            { title: "Flutter Rendering Pipeline - Inside Flutter", type: "deep_dive", url: "https://docs.flutter.dev/resources/inside-flutter" }
        ]
    },
    "n_cp_3": {
        title: "Expo (React Native)",
        description: "Use Expo to rapidly build and deploy React Native apps with managed workflows and universal APIs.",
        resources: [
            { title: "Expo Official Documentation", type: "official", url: "https://docs.expo.dev/" },
            { title: "Expo Tutorial for Beginners (Simon Grimm)", type: "video_en", url: "https://www.youtube.com/watch?v=XCifkDC0yXA" },
            { title: "Expo React Native in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=WSppuT4A09Y" },
            { title: "Expo Managed vs Bare Workflow", type: "article", url: "https://docs.expo.dev/introduction/managed-vs-bare/" },
            { title: "expo/expo", type: "github", url: "https://github.com/expo/expo" },
            { title: "Expo SDK API Reference", type: "cheat_sheet", url: "https://docs.expo.dev/versions/latest/" },
            { title: "EAS Build & Submit Deep Dive", type: "deep_dive", url: "https://docs.expo.dev/build/introduction/" }
        ]
    },
    // --- 4. UI & Navigation ---
    "n_ui_1": {
        title: "React Navigation",
        description: "Implement stack, tab, and drawer navigation in React Native using React Navigation.",
        resources: [
            { title: "React Navigation Official Docs", type: "official", url: "https://reactnavigation.org/docs/getting-started" },
            { title: "React Navigation v6 Tutorial (Traversy)", type: "video_en", url: "https://www.youtube.com/watch?v=ZP8QyCIUeIA" },
            { title: "React Navigation in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=zUb4XQXPXME" },
            { title: "Deep Linking in React Native", type: "article", url: "https://reactnavigation.org/docs/deep-linking" },
            { title: "react-navigation/react-navigation", type: "github", url: "https://github.com/react-navigation/react-navigation" },
            { title: "React Navigation API Reference", type: "cheat_sheet", url: "https://reactnavigation.org/docs/hello-react-navigation" },
            { title: "React Native Navigation (Wix) – Alternative", type: "deep_dive", url: "https://github.com/wix/react-native-navigation" }
        ]
    },
    "n_ui_2": {
        title: "Flutter Navigation (go_router)",
        description: "Manage routes declaratively in Flutter apps with go_router and nested navigation.",
        resources: [
            { title: "Navigation & Routing in Flutter (Official)", type: "official", url: "https://docs.flutter.dev/ui/navigation" },
            { title: "GoRouter Tutorial (Reso Coder)", type: "video_en", url: "https://www.youtube.com/watch?v=b6Z885Z46cU" },
            { title: "Flutter Navigation in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=QwlrHjBYQ2M" },
            { title: "Deep Linking in Flutter", type: "article", url: "https://docs.flutter.dev/ui/navigation/deep-linking" },
            { title: "flutter/packages – go_router", type: "github", url: "https://github.com/flutter/packages/tree/main/packages/go_router" },
            { title: "go_router Package on pub.dev", type: "cheat_sheet", url: "https://pub.dev/packages/go_router" },
            { title: "Navigator 2.0 & GoRouter Deep Dive", type: "deep_dive", url: "https://docs.flutter.dev/ui/navigation/url-strategies" }
        ]
    },
    "n_ui_3": {
        title: "Styling & Responsive UI",
        description: "Style components in React Native using StyleSheet, and create adaptive layouts for different screen sizes.",
        resources: [
            { title: "StyleSheet API - React Native", type: "official", url: "https://reactnative.dev/docs/stylesheet" },
            { title: "Styling in React Native (Simon Grimm)", type: "video_en", url: "https://www.youtube.com/watch?v=XhpXOwmUYOA" },
            { title: "React Native Styling in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=XhpXOwmUYOA" },
            { title: "Flexbox in React Native (Official Guide)", type: "article", url: "https://reactnative.dev/docs/flexbox" },
            { title: "GeekyAnts/NativeBase", type: "github", url: "https://github.com/GeekyAnts/NativeBase" },
            { title: "React Native Layout Props Reference", type: "cheat_sheet", url: "https://reactnative.dev/docs/layout-props" },
            { title: "Responsive Design with useWindowDimensions", type: "deep_dive", url: "https://reactnative.dev/docs/usewindowdimensions" }
        ]
    },
    "n_ui_4": {
        title: "Animations (Reanimated)",
        description: "Create smooth, high-performance animations using React Native Reanimated and Gesture Handler.",
        resources: [
            { title: "React Native Reanimated Official Docs", type: "official", url: "https://docs.swmansion.com/react-native-reanimated/" },
            { title: "Reanimated 3 Tutorial (William Candillon)", type: "video_en", url: "https://www.youtube.com/watch?v=rJyhU064W8E" },
            { title: "React Native Animations in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=rJyhU064W8E" },
            { title: "Worklets & Shared Values in Reanimated", type: "article", url: "https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/worklets" },
            { title: "software-mansion/react-native-reanimated", type: "github", url: "https://github.com/software-mansion/react-native-reanimated" },
            { title: "Reanimated Animation Types Reference", type: "cheat_sheet", url: "https://docs.swmansion.com/react-native-reanimated/docs/animations/withTiming" },
            { title: "React Native Skia for 2D Graphics", type: "deep_dive", url: "https://shopify.github.io/react-native-skia/" }
        ]
    },
    // --- 5. State Management ---
    "n_sm_1": {
        title: "Redux Toolkit",
        description: "Manage complex global app state with Redux Toolkit, slices, and RTK Query.",
        resources: [
            { title: "Redux Toolkit Official Docs", type: "official", url: "https://redux-toolkit.js.org/" },
            { title: "Redux Toolkit Full Tutorial (Dave Gray)", type: "video_en", url: "https://www.youtube.com/watch?v=Q5TqsetwCoE" },
            { title: "Redux Toolkit in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=ZP6zJLGdR8s" },
            { title: "Redux Essentials Tutorial (Official)", type: "article", url: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts" },
            { title: "reduxjs/redux-toolkit", type: "github", url: "https://github.com/reduxjs/redux-toolkit" },
            { title: "Redux Toolkit Quick Start Guide", type: "cheat_sheet", url: "https://redux-toolkit.js.org/tutorials/quick-start" },
            { title: "RTK Query – Data Fetching & Caching", type: "deep_dive", url: "https://redux-toolkit.js.org/rtk-query/overview" }
        ]
    },
    "n_sm_2": {
        title: "Zustand / Jotai",
        description: "Use lightweight, modern state management libraries like Zustand or Jotai for simpler React Native apps.",
        resources: [
            { title: "Zustand Official Docs", type: "official", url: "https://docs.pmnd.rs/zustand/getting-started/introduction" },
            { title: "Zustand Crash Course (Jack Herrington)", type: "video_en", url: "https://www.youtube.com/watch?v=LcJURRiIHMc" },
            { title: "Zustand State Management in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=KCr-UNsM3vA" },
            { title: "State Management in React Native – Full Comparison", type: "article", url: "https://blog.logrocket.com/state-management-react-native-redux-context-api-zustand/" },
            { title: "pmndrs/zustand", type: "github", url: "https://github.com/pmndrs/zustand" },
            { title: "Zustand API Reference", type: "cheat_sheet", url: "https://docs.pmnd.rs/zustand/apis/create" },
            { title: "TanStack Query in React Native", type: "deep_dive", url: "https://tanstack.com/query/latest/docs/framework/react/react-native" }
        ]
    },
    "n_sm_3": {
        title: "Flutter State (Riverpod/Bloc)",
        description: "Choose the right state management solution for Flutter: Riverpod, Provider, or Bloc pattern.",
        resources: [
            { title: "Flutter State Management Options (Official)", type: "official", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/options" },
            { title: "Riverpod 2.0 Full Tutorial (Reso Coder)", type: "video_en", url: "https://www.youtube.com/watch?v=EPVKdverFuw" },
            { title: "Flutter Bloc in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=xIzK21wmJrQ" },
            { title: "Getting Started with the Bloc Library", type: "article", url: "https://bloclibrary.dev/getting-started/" },
            { title: "felangel/bloc", type: "github", url: "https://github.com/felangel/bloc" },
            { title: "Riverpod Getting Started", type: "cheat_sheet", url: "https://riverpod.dev/docs/introduction/getting_started" },
            { title: "InheritedWidget Under the Hood", type: "deep_dive", url: "https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html" }
        ]
    },
    // --- 6. Networking & APIs ---
    "n_api_1": {
        title: "REST API Integration",
        description: "Fetch data from REST APIs in React Native using fetch or Axios and handle loading and error states.",
        resources: [
            { title: "Networking in React Native (Official)", type: "official", url: "https://reactnative.dev/docs/network" },
            { title: "Axios in React Native (Simon Grimm)", type: "video_en", url: "https://www.youtube.com/watch?v=-mN3VyJuCjM" },
            { title: "API Calling in React Native Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=NZ4nnZ5Z_xw" },
            { title: "Using the Fetch API (MDN)", type: "article", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
            { title: "axios/axios", type: "github", url: "https://github.com/axios/axios" },
            { title: "Fetch vs Axios – Which to use?", type: "cheat_sheet", url: "https://www.freecodecamp.org/news/fetch-vs-axios-which-should-you-prefer-for-making-http-requests/" },
            { title: "Apollo GraphQL in React Native", type: "deep_dive", url: "https://www.apollographql.com/docs/react/integrations/react-native/" }
        ]
    },
    "n_api_2": {
        title: "WebSockets & Real-time",
        description: "Build real-time features like live chat, notifications, and collaborative tools using WebSockets.",
        resources: [
            { title: "WebSocket API (MDN)", type: "official", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket" },
            { title: "Socket.io with React Native Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=favi7avxIag" },
            { title: "WebSockets in React Native Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=favi7avxIag" },
            { title: "Getting Started with Socket.io Chat App", type: "article", url: "https://socket.io/get-started/chat" },
            { title: "socketio/socket.io-client", type: "github", url: "https://github.com/socketio/socket.io-client" },
            { title: "WebSocket Events Reference (MDN)", type: "cheat_sheet", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#events" },
            { title: "Expo SQLite for Local Real-time Data", type: "deep_dive", url: "https://docs.expo.dev/versions/latest/sdk/sqlite/" }
        ]
    },
    "n_api_3": {
        title: "Push Notifications",
        description: "Send and receive push notifications on iOS and Android using FCM and APNs.",
        resources: [
            { title: "Firebase Cloud Messaging (FCM) Docs", type: "official", url: "https://firebase.google.com/docs/cloud-messaging" },
            { title: "Push Notifications in React Native with Expo", type: "video_en", url: "https://www.youtube.com/watch?v=SaPOWEskPG8" },
            { title: "Push Notifications in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=SaPOWEskPG8" },
            { title: "Setting up Push Notifications with Expo", type: "article", url: "https://docs.expo.dev/push-notifications/overview/" },
            { title: "invertase/react-native-firebase", type: "github", url: "https://github.com/invertase/react-native-firebase" },
            { title: "FCM Notification Payload Reference", type: "cheat_sheet", url: "https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages" },
            { title: "Background Notification Handling in Expo", type: "deep_dive", url: "https://docs.expo.dev/push-notifications/receiving-notifications/" }
        ]
    },
    "n_api_4": {
        title: "Authentication (OAuth / JWT)",
        description: "Implement secure user authentication using OAuth2, JWT tokens, and biometric authentication.",
        resources: [
            { title: "Firebase Authentication Docs", type: "official", url: "https://firebase.google.com/docs/auth" },
            { title: "Auth in React Native (Traversy)", type: "video_en", url: "https://www.youtube.com/watch?v=xJA8tP74KD0" },
            { title: "React Native Authentication in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=-6v9mUOEecw" },
            { title: "Auth Code Flow with PKCE for Mobile (Auth0)", type: "article", url: "https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-pkce" },
            { title: "FormidableLabs/react-native-app-auth", type: "github", url: "https://github.com/FormidableLabs/react-native-app-auth" },
            { title: "JWT.io – Structure & Debugger", type: "cheat_sheet", url: "https://jwt.io/" },
            { title: "Biometric Auth with expo-local-authentication", type: "deep_dive", url: "https://docs.expo.dev/versions/latest/sdk/local-authentication/" }
        ]
    },
    // --- 7. Data & Storage ---
    "n_data_1": {
        title: "AsyncStorage / MMKV",
        description: "Persist local key-value data with AsyncStorage or the faster MMKV library.",
        resources: [
            { title: "AsyncStorage Official Docs", type: "official", url: "https://react-native-async-storage.github.io/async-storage/" },
            { title: "MMKV in React Native (Phillip Lackner style)", type: "video_en", url: "https://www.youtube.com/watch?v=7N5fug4O-zg" },
            { title: "AsyncStorage & Storage in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=pY-UvlALKhw" },
            { title: "MMKV vs AsyncStorage – Performance Comparison", type: "article", url: "https://blog.logrocket.com/using-react-native-mmkv/" },
            { title: "mrousavy/react-native-mmkv", type: "github", url: "https://github.com/mrousavy/react-native-mmkv" },
            { title: "AsyncStorage API Usage Reference", type: "cheat_sheet", url: "https://react-native-async-storage.github.io/async-storage/docs/usage" },
            { title: "Secure Storage with react-native-keychain", type: "deep_dive", url: "https://github.com/oblador/react-native-keychain" }
        ]
    },
    "n_data_2": {
        title: "SQLite / WatermelonDB",
        description: "Store structured relational data locally using SQLite or the powerful WatermelonDB ORM.",
        resources: [
            { title: "expo-sqlite Official Docs", type: "official", url: "https://docs.expo.dev/versions/latest/sdk/sqlite/" },
            { title: "WatermelonDB + React Native Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=gNsNmIy_vYw" },
            { title: "SQLite in React Native Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=Y5k0CxsB8Xo" },
            { title: "WatermelonDB – Getting Started Guide", type: "article", url: "https://watermelondb.dev/docs" },
            { title: "Nozbe/WatermelonDB", type: "github", url: "https://github.com/Nozbe/WatermelonDB" },
            { title: "WatermelonDB Schema Reference", type: "cheat_sheet", url: "https://watermelondb.dev/docs/Schema.html" },
            { title: "Offline-First App Architecture (RxDB)", type: "deep_dive", url: "https://rxdb.info/offline-first.html" }
        ]
    },
    "n_data_3": {
        title: "Firebase Firestore",
        description: "Use Cloud Firestore as a scalable, real-time backend database for mobile apps.",
        resources: [
            { title: "Cloud Firestore Documentation", type: "official", url: "https://firebase.google.com/docs/firestore" },
            { title: "Firebase with React Native Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=-4g7henIRU8" },
            { title: "Firebase Firestore in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=_L8j-ZC83y4" },
            { title: "Firestore Data Model Guide", type: "article", url: "https://firebase.google.com/docs/firestore/data-model" },
            { title: "invertase/react-native-firebase", type: "github", url: "https://github.com/invertase/react-native-firebase" },
            { title: "Firestore Queries & Indexing Reference", type: "cheat_sheet", url: "https://firebase.google.com/docs/firestore/query-data/queries" },
            { title: "Firestore Security Rules Deep Dive", type: "deep_dive", url: "https://firebase.google.com/docs/firestore/security/get-started" }
        ]
    },
    // --- 8. Deployment ---
    "n_dep_1": {
        title: "EAS Build (Expo)",
        description: "Build production-ready iOS and Android binaries in the cloud using Expo Application Services.",
        resources: [
            { title: "EAS Build Introduction (Official)", type: "official", url: "https://docs.expo.dev/build/introduction/" },
            { title: "EAS Build Tutorial (Simon Grimm)", type: "video_en", url: "https://www.youtube.com/watch?v=uQCE9zl3dXU" },
            { title: "EAS Build & Deploy in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=mPCif7nRHrM" },
            { title: "EAS vs Fastlane for Mobile CI/CD", type: "article", url: "https://docs.expo.dev/build/building-on-ci/" },
            { title: "expo/eas-cli", type: "github", url: "https://github.com/expo/eas-cli" },
            { title: "eas.json Configuration Reference", type: "cheat_sheet", url: "https://docs.expo.dev/build/eas-json/" },
            { title: "EAS Submit – App Store & Play Store", type: "deep_dive", url: "https://docs.expo.dev/submit/introduction/" }
        ]
    },
    "n_dep_2": {
        title: "Fastlane CI/CD",
        description: "Automate building, testing, and deploying to both the App Store and Google Play using Fastlane.",
        resources: [
            { title: "Fastlane Official Docs", type: "official", url: "https://docs.fastlane.tools/" },
            { title: "Fastlane for iOS & Android CI/CD", type: "video_en", url: "https://www.youtube.com/watch?v=yNqCpMLmJqE" },
            { title: "Fastlane CI/CD Setup in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=57dkyTmOCmE" },
            { title: "Setting up Fastlane Match for iOS Code Signing", type: "article", url: "https://docs.fastlane.tools/actions/match/" },
            { title: "fastlane/fastlane", type: "github", url: "https://github.com/fastlane/fastlane" },
            { title: "Fastlane Actions Reference", type: "cheat_sheet", url: "https://docs.fastlane.tools/actions/" },
            { title: "GitHub Actions for Mobile CI/CD", type: "deep_dive", url: "https://docs.github.com/en/actions/writing-workflows/quickstart" }
        ]
    },
    "n_dep_3": {
        title: "App Store Publishing",
        description: "Navigate the App Store Connect and Google Play Console submission processes.",
        resources: [
            { title: "App Store Connect Help (Apple)", type: "official", url: "https://developer.apple.com/app-store-connect/" },
            { title: "Publishing to App Store & Play Store Guide", type: "video_en", url: "https://www.youtube.com/watch?v=_P-bJW-4TmY" },
            { title: "App Store Submission in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=_P-bJW-4TmY" },
            { title: "App Store Review Guidelines", type: "article", url: "https://developer.apple.com/app-store/review/guidelines/" },
            { title: "Triple-T/gradle-play-publisher", type: "github", url: "https://github.com/Triple-T/gradle-play-publisher" },
            { title: "Android App Launch Checklist", type: "cheat_sheet", url: "https://developer.android.com/distribute/best-practices/launch/launch-checklist" },
            { title: "TestFlight Beta Testing Guide", type: "deep_dive", url: "https://developer.apple.com/testflight/" }
        ]
    },
    "n_dep_4": {
        title: "OTA Updates (CodePush / EAS Update)",
        description: "Push JavaScript bundle updates to users instantly without App Store review using CodePush or Expo Updates.",
        resources: [
            { title: "Expo Updates Official Docs", type: "official", url: "https://docs.expo.dev/versions/latest/sdk/updates/" },
            { title: "CodePush OTA Updates Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=DWpcD6bvTRA" },
            { title: "OTA Updates in React Native Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=XCyw6Emfvdw" },
            { title: "CodePush vs Expo EAS Update – Comparison", type: "article", url: "https://docs.expo.dev/eas-update/codepush/" },
            { title: "microsoft/react-native-code-push", type: "github", url: "https://github.com/microsoft/react-native-code-push" },
            { title: "EAS Update Configuration Reference", type: "cheat_sheet", url: "https://docs.expo.dev/eas-update/eas-json/" },
            { title: "EAS Update Deep Dive", type: "deep_dive", url: "https://docs.expo.dev/eas-update/introduction/" }
        ]
    }
};
