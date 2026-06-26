const fs = require('fs');
const path = require('path');

const resourcesMap = {
    // Cross-Platform Concepts
    "n_cross_1": [ // Why Cross Platform
        { id: "n_cross_1-1", title: "Cross-Platform vs Native", type: "official", url: "https://reactnative.dev/docs/getting-started" },
        { id: "n_cross_1-2", title: "Native vs Cross Platform Development", type: "video_en", url: "https://www.youtube.com/watch?v=1FJEIEHkC_c" },
        { id: "n_cross_1-3", title: "Native vs Hybrid vs Cross Platform (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Fq_z-eF9vM0" },
        { id: "n_cross_1-4", title: "The State of Cross Platform", type: "article", url: "https://medium.com/flutter/flutter-vs-react-native-in-2023-e18e00185973" },
        { id: "n_cross_1-5", title: "awesome-cross-platform", type: "github", url: "https://github.com/react-native-community/awesome-react-native" },
        { id: "n_cross_1-6", title: "Cross-Platform Frameworks Cheat Sheet", type: "cheat_sheet", url: "https://dev.to/sahithyan/react-native-vs-flutter-cheat-sheet-3j13" },
        { id: "n_cross_1-7", title: "Deep Dive: Under the Hood of Cross Platform", type: "deep_dive", url: "https://engineering.airbnb.com/sunsetting-react-native-1868ba28e30a/" }
    ],
    "n_cross_2": [ // Framework Ecosystems
        { id: "n_cross_2-1", title: "React Native Framework", type: "official", url: "https://reactnative.dev/" },
        { id: "n_cross_2-2", title: "Flutter Framework", type: "video_en", url: "https://flutter.dev/" },
        { id: "n_cross_2-3", title: "React Native vs Flutter (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_cross_2-4", title: "Choosing a Framework", type: "article", url: "https://medium.com/@kps250/react-native-vs-flutter-in-2023-who-is-the-winner-20c2df8b1d98" },
        { id: "n_cross_2-5", title: "awesome-flutter", type: "github", url: "https://github.com/Solido/awesome-flutter" },
        { id: "n_cross_2-6", title: "Framework Comparison Cheat Sheet", type: "cheat_sheet", url: "https://flutter.dev/docs/get-started/flutter-for/react-native-devs" },
        { id: "n_cross_2-7", title: "Deep Dive: React Native Architecture", type: "deep_dive", url: "https://reactnative.dev/architecture/overview" }
    ],
    "n_cross_3": [ // Shared UI Principles
        { id: "n_cross_3-1", title: "Mobile UI Design", type: "official", url: "https://developer.apple.com/design/human-interface-guidelines/" },
        { id: "n_cross_3-2", title: "Mobile UI/UX Principles", type: "video_en", url: "https://www.youtube.com/watch?v=cDgwZvsJ00w" },
        { id: "n_cross_3-3", title: "Mobile UI Design Rules (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_cross_3-4", title: "Designing Cross Platform Apps", type: "article", url: "https://uxdesign.cc/how-to-design-for-both-ios-and-android-39b1a0391ed2" },
        { id: "n_cross_3-5", title: "mobile-ui-components", type: "github", url: "https://github.com/GeekyAnts/NativeBase" },
        { id: "n_cross_3-6", title: "Mobile UI Cheat Sheet", type: "cheat_sheet", url: "https://m3.material.io/" },
        { id: "n_cross_3-7", title: "Deep Dive: Material vs HIG", type: "deep_dive", url: "https://developer.apple.com/design/human-interface-guidelines/" }
    ],
    // React Native
    "n_rn_1": [ // Core Components
        { id: "n_rn_1-1", title: "Core Components Docs", type: "official", url: "https://reactnative.dev/docs/components-and-apis" },
        { id: "n_rn_1-2", title: "React Native Crash Course", type: "video_en", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
        { id: "n_rn_1-3", title: "React Native Tutorial (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=ANdSdIlgsEw" },
        { id: "n_rn_1-4", title: "Understanding View and Text", type: "article", url: "https://reactnative.dev/docs/intro-react-native-components" },
        { id: "n_rn_1-5", title: "react-native-vector-icons", type: "github", url: "https://github.com/oblador/react-native-vector-icons" },
        { id: "n_rn_1-6", title: "RN Core Components Cheat Sheet", type: "cheat_sheet", url: "https://github.com/jondot/awesome-react-native" },
        { id: "n_rn_1-7", title: "Deep Dive: Native Modules", type: "deep_dive", url: "https://reactnative.dev/docs/native-modules-intro" }
    ],
    "n_rn_2": [ // Navigation
        { id: "n_rn_2-1", title: "React Navigation", type: "official", url: "https://reactnavigation.org/" },
        { id: "n_rn_2-2", title: "React Navigation V6 Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=nQGCwdABCUw" },
        { id: "n_rn_2-3", title: "React Navigation (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_rn_2-4", title: "Deep Linking in React Native", type: "article", url: "https://reactnavigation.org/docs/deep-linking/" },
        { id: "n_rn_2-5", title: "react-navigation", type: "github", url: "https://github.com/react-navigation/react-navigation" },
        { id: "n_rn_2-6", title: "Navigation Cheat Sheet", type: "cheat_sheet", url: "https://reactnavigation.org/docs/hello-react-navigation" },
        { id: "n_rn_2-7", title: "Deep Dive: Native Navigation (RNN)", type: "deep_dive", url: "https://github.com/wix/react-native-navigation" }
    ],
    "n_rn_3": [ // State Management
        { id: "n_rn_3-1", title: "Redux Toolkit", type: "official", url: "https://redux-toolkit.js.org/" },
        { id: "n_rn_3-2", title: "Zustand for React Native", type: "video_en", url: "https://www.youtube.com/watch?v=KCr-UNsM3vA" },
        { id: "n_rn_3-3", title: "Redux Toolkit in RN (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=1bM-0aMszF0" },
        { id: "n_rn_3-4", title: "Choosing a State Management Library", type: "article", url: "https://blog.logrocket.com/state-management-react-native-redux-context-api-zustand/" },
        { id: "n_rn_3-5", title: "zustand", type: "github", url: "https://github.com/pmndrs/zustand" },
        { id: "n_rn_3-6", title: "Zustand vs Redux Cheat Sheet", type: "cheat_sheet", url: "https://redux.js.org/introduction/getting-started" },
        { id: "n_rn_3-7", title: "Deep Dive: React Query in RN", type: "deep_dive", url: "https://tanstack.com/query/latest/docs/react/react-native" }
    ],
    // Flutter
    "n_fl_1": [ // Widgets Basics
        { id: "n_fl_1-1", title: "Introduction to Widgets", type: "official", url: "https://docs.flutter.dev/ui/widgets" },
        { id: "n_fl_1-2", title: "Flutter Crash Course", type: "video_en", url: "https://www.youtube.com/watch?v=VPvVD8t02U8" },
        { id: "n_fl_1-3", title: "Flutter Tutorial (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_fl_1-4", title: "Stateless vs Stateful Widgets", type: "article", url: "https://docs.flutter.dev/ui/interactive" },
        { id: "n_fl_1-5", title: "flutter-samples", type: "github", url: "https://github.com/flutter/samples" },
        { id: "n_fl_1-6", title: "Flutter Widget Cheat Sheet", type: "cheat_sheet", url: "https://medium.com/flutter-community/flutter-cheat-sheet-3f26cf9c0fc3" },
        { id: "n_fl_1-7", title: "Deep Dive: Widget Lifecycle", type: "deep_dive", url: "https://flutter.dev/docs/development/ui/interactive" }
    ],
    "n_fl_2": [ // Routing
        { id: "n_fl_2-1", title: "Navigation & Routing", type: "official", url: "https://docs.flutter.dev/ui/navigation" },
        { id: "n_fl_2-2", title: "Flutter GoRouter", type: "video_en", url: "https://www.youtube.com/watch?v=J3mC3PDB430" },
        { id: "n_fl_2-3", title: "Navigation in Flutter (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0kEwS5pXQXY" },
        { id: "n_fl_2-4", title: "Deep Linking in Flutter", type: "article", url: "https://docs.flutter.dev/ui/navigation/deep-linking" },
        { id: "n_fl_2-5", title: "go_router", type: "github", url: "https://github.com/flutter/packages/tree/main/packages/go_router" },
        { id: "n_fl_2-6", title: "GoRouter Cheat Sheet", type: "cheat_sheet", url: "https://pub.dev/packages/go_router" },
        { id: "n_fl_2-7", title: "Deep Dive: Navigator 2.0", type: "deep_dive", url: "https://medium.com/flutter/learning-flutters-new-navigation-and-routing-system-7c9068155ade" }
    ],
    "n_fl_3": [ // State Management
        { id: "n_fl_3-1", title: "State Management in Flutter", type: "official", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/options" },
        { id: "n_fl_3-2", title: "Provider vs Riverpod vs Bloc", type: "video_en", url: "https://www.youtube.com/watch?v=VlA_YADwE2Y" },
        { id: "n_fl_3-3", title: "Provider Tutorial (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_fl_3-4", title: "Bloc Pattern Explained", type: "article", url: "https://bloclibrary.dev/#/gettingstarted" },
        { id: "n_fl_3-5", title: "flutter_bloc", type: "github", url: "https://github.com/felangel/bloc" },
        { id: "n_fl_3-6", title: "Riverpod Cheat Sheet", type: "cheat_sheet", url: "https://riverpod.dev/" },
        { id: "n_fl_3-7", title: "Deep Dive: InheritedWidget", type: "deep_dive", url: "https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html" }
    ],
    // Storage & Sync
    "n_db_1": [ // Local Databases
        { id: "n_db_1-1", title: "SQLite in React Native / Flutter", type: "official", url: "https://docs.flutter.dev/cookbook/persistence/sqlite" },
        { id: "n_db_1-2", title: "WatermelonDB vs Realm", type: "video_en", url: "https://www.youtube.com/watch?v=Fq_z-eF9vM0" },
        { id: "n_db_1-3", title: "Local DB in Apps (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_db_1-4", title: "Using WatermelonDB", type: "article", url: "https://watermelondb.dev/docs" },
        { id: "n_db_1-5", title: "realm-js", type: "github", url: "https://github.com/realm/realm-js" },
        { id: "n_db_1-6", title: "WatermelonDB Schema Cheat Sheet", type: "cheat_sheet", url: "https://watermelondb.dev/docs/Schema" },
        { id: "n_db_1-7", title: "Deep Dive: Offline-First Apps", type: "deep_dive", url: "https://rxdb.info/offline-first.html" }
    ],
    "n_db_2": [ // Key-Value Stores
        { id: "n_db_2-1", title: "AsyncStorage / SharedPrefs", type: "official", url: "https://react-native-async-storage.github.io/async-storage/" },
        { id: "n_db_2-2", title: "MMKV in React Native", type: "video_en", url: "https://www.youtube.com/watch?v=jT2gGfsU0nE" },
        { id: "n_db_2-3", title: "Storing Tokens (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_db_2-4", title: "MMKV vs AsyncStorage", type: "article", url: "https://blog.logrocket.com/using-react-native-mmkv/" },
        { id: "n_db_2-5", title: "react-native-mmkv", type: "github", url: "https://github.com/mrousavy/react-native-mmkv" },
        { id: "n_db_2-6", title: "AsyncStorage Cheat Sheet", type: "cheat_sheet", url: "https://react-native-async-storage.github.io/async-storage/docs/usage" },
        { id: "n_db_2-7", title: "Deep Dive: Secure Enclave Storage", type: "deep_dive", url: "https://github.com/oblador/react-native-keychain" }
    ],
    "n_db_3": [ // Remote APIs
        { id: "n_db_3-1", title: "Networking in Mobile", type: "official", url: "https://reactnative.dev/docs/network" },
        { id: "n_db_3-2", title: "Axios vs Fetch in RN", type: "video_en", url: "https://www.youtube.com/watch?v=bbMsuI2p1DQ" },
        { id: "n_db_3-3", title: "API Calling in Mobile (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=x0xZ3WjH944" },
        { id: "n_db_3-4", title: "GraphQL in React Native", type: "article", url: "https://www.apollographql.com/docs/react/integrations/react-native/" },
        { id: "n_db_3-5", title: "apollo-client", type: "github", url: "https://github.com/apollographql/apollo-client" },
        { id: "n_db_3-6", title: "Fetch API Cheat Sheet", type: "cheat_sheet", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
        { id: "n_db_3-7", title: "Deep Dive: TRPC with React Native", type: "deep_dive", url: "https://trpc.io/docs/client/react/setup" }
    ],
    // Native Modules
    "n_nat_1": [ // JNI & Objective-C++
        { id: "n_nat_1-1", title: "Native Modules Setup", type: "official", url: "https://reactnative.dev/docs/native-modules-setup" },
        { id: "n_nat_1-2", title: "Building a Native Module", type: "video_en", url: "https://www.youtube.com/watch?v=EOfCEhWq8sg" },
        { id: "n_nat_1-3", title: "React Native Bridge (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Xh3D74B4xWk" },
        { id: "n_nat_1-4", title: "JNI Basics for Android", type: "article", url: "https://developer.android.com/training/articles/perf-jni" },
        { id: "n_nat_1-5", title: "react-native-builder-bob", type: "github", url: "https://github.com/callstack/react-native-builder-bob" },
        { id: "n_nat_1-6", title: "Native Module Cheat Sheet", type: "cheat_sheet", url: "https://reactnative.dev/docs/native-modules-ios" },
        { id: "n_nat_1-7", title: "Deep Dive: JSI (JavaScript Interface)", type: "deep_dive", url: "https://reactnative.dev/architecture/glossary#jsi" }
    ],
    "n_nat_2": [ // Method Channels
        { id: "n_nat_2-1", title: "Platform Channels in Flutter", type: "official", url: "https://docs.flutter.dev/platform-integration/platform-channels" },
        { id: "n_nat_2-2", title: "Writing Platform Specific Code", type: "video_en", url: "https://www.youtube.com/watch?v=1FJEIEHkC_c" },
        { id: "n_nat_2-3", title: "Method Channels (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_nat_2-4", title: "Communicating with Native Code", type: "article", url: "https://medium.com/flutter/flutter-platform-channels-74274c1064ea" },
        { id: "n_nat_2-5", title: "flutter/plugins", type: "github", url: "https://github.com/flutter/plugins" },
        { id: "n_nat_2-6", title: "Platform Channel Cheat Sheet", type: "cheat_sheet", url: "https://docs.flutter.dev/platform-integration/platform-channels" },
        { id: "n_nat_2-7", title: "Deep Dive: EventChannels", type: "deep_dive", url: "https://api.flutter.dev/flutter/services/EventChannel-class.html" }
    ],
    "n_nat_3": [ // Turbo Modules / Fabric
        { id: "n_nat_3-1", title: "New Architecture Overview", type: "official", url: "https://reactnative.dev/architecture/overview" },
        { id: "n_nat_3-2", title: "React Native New Architecture", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_nat_3-3", title: "Turbo Modules (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_nat_3-4", title: "Migrating to Turbo Modules", type: "article", url: "https://reactnative.dev/docs/the-new-architecture/pillars-turbomodules" },
        { id: "n_nat_3-5", title: "react-native-new-architecture", type: "github", url: "https://github.com/reactwg/react-native-new-architecture" },
        { id: "n_nat_3-6", title: "Fabric Cheat Sheet", type: "cheat_sheet", url: "https://reactnative.dev/docs/the-new-architecture/pillars-fabric" },
        { id: "n_nat_3-7", title: "Deep Dive: Codegen", type: "deep_dive", url: "https://reactnative.dev/docs/the-new-architecture/pillars-codegen" }
    ],
    // Tooling & Testing
    "n_test_1": [ // Unit Testing
        { id: "n_test_1-1", title: "Testing in React Native", type: "official", url: "https://reactnative.dev/docs/testing" },
        { id: "n_test_1-2", title: "Jest and React Native Testing Library", type: "video_en", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_test_1-3", title: "Unit Testing (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_test_1-4", title: "Testing Flutter Apps", type: "article", url: "https://docs.flutter.dev/testing/overview" },
        { id: "n_test_1-5", title: "react-native-testing-library", type: "github", url: "https://github.com/callstack/react-native-testing-library" },
        { id: "n_test_1-6", title: "Jest Cheat Sheet", type: "cheat_sheet", url: "https://github.com/sapegin/jest-cheat-sheet" },
        { id: "n_test_1-7", title: "Deep Dive: Mocking Native Modules", type: "deep_dive", url: "https://callstack.github.io/react-native-testing-library/docs/advanced/mocking-native-modules/" }
    ],
    "n_test_2": [ // E2E Testing
        { id: "n_test_2-1", title: "Detox E2E Testing", type: "official", url: "https://wix.github.io/Detox/" },
        { id: "n_test_2-2", title: "Detox Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=cT_3E7m-jHk" },
        { id: "n_test_2-3", title: "E2E Testing in Mobile (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=H7sQnU-zCII" },
        { id: "n_test_2-4", title: "Maestro UI Testing", type: "article", url: "https://maestro.mobile.dev/" },
        { id: "n_test_2-5", title: "maestro", type: "github", url: "https://github.com/mobile-dev-inc/maestro" },
        { id: "n_test_2-6", title: "Detox Config Cheat Sheet", type: "cheat_sheet", url: "https://wix.github.io/Detox/docs/config/overview/" },
        { id: "n_test_2-7", title: "Deep Dive: Appium vs Detox vs Maestro", type: "deep_dive", url: "https://blog.bitsrc.io/maestro-vs-detox-vs-appium-mobile-testing-frameworks-compared-2c1b489a74ea" }
    ],
    "n_test_3": [ // Profiling
        { id: "n_test_3-1", title: "Profiling React Native", type: "official", url: "https://reactnative.dev/docs/profiling" },
        { id: "n_test_3-2", title: "Flipper Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=bbMsuI2p1DQ" },
        { id: "n_test_3-3", title: "Performance Profiling (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_test_3-4", title: "Flutter DevTools", type: "article", url: "https://docs.flutter.dev/tools/devtools" },
        { id: "n_test_3-5", title: "flipper", type: "github", url: "https://github.com/facebook/flipper" },
        { id: "n_test_3-6", title: "React DevTools Profiler Cheat Sheet", type: "cheat_sheet", url: "https://react.dev/learn/react-developer-tools" },
        { id: "n_test_3-7", title: "Deep Dive: Hermes Profiler", type: "deep_dive", url: "https://reactnative.dev/docs/profile-hermes" }
    ],
    // App Store
    "n_store_1": [ // Code Signing
        { id: "n_store_1-1", title: "Publishing to Google Play", type: "official", url: "https://reactnative.dev/docs/signed-apk-android" },
        { id: "n_store_1-2", title: "Code Signing iOS & Android", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_store_1-3", title: "App Signing (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_store_1-4", title: "Publishing to App Store", type: "article", url: "https://reactnative.dev/docs/publishing-to-app-store" },
        { id: "n_store_1-5", title: "fastlane", type: "github", url: "https://github.com/fastlane/fastlane" },
        { id: "n_store_1-6", title: "Match (Fastlane) Cheat Sheet", type: "cheat_sheet", url: "https://docs.fastlane.tools/actions/match/" },
        { id: "n_store_1-7", title: "Deep Dive: iOS Provisioning Profiles", type: "deep_dive", url: "https://developer.apple.com/help/account/manage-profiles/create-an-app-store-provisioning-profile/" }
    ],
    "n_store_2": [ // CI/CD Pipelines
        { id: "n_store_2-1", title: "GitHub Actions for Mobile", type: "official", url: "https://docs.github.com/en/actions" },
        { id: "n_store_2-2", title: "EAS Build Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=1FJEIEHkC_c" },
        { id: "n_store_2-3", title: "CI/CD in React Native (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_store_2-4", title: "Expo Application Services (EAS)", type: "article", url: "https://docs.expo.dev/build/introduction/" },
        { id: "n_store_2-5", title: "eas-cli", type: "github", url: "https://github.com/expo/eas-cli" },
        { id: "n_store_2-6", title: "EAS Build Cheat Sheet", type: "cheat_sheet", url: "https://docs.expo.dev/build/eas-json/" },
        { id: "n_store_2-7", title: "Deep Dive: Bitrise for Mobile", type: "deep_dive", url: "https://devcenter.bitrise.io/en/getting-started.html" }
    ],
    "n_store_3": [ // App Store Optimization
        { id: "n_store_3-1", title: "App Store Optimization Basics", type: "official", url: "https://developer.apple.com/app-store/search/" },
        { id: "n_store_3-2", title: "ASO Strategies 2024", type: "video_en", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_store_3-3", title: "ASO Explained (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=x0xZ3WjH944" },
        { id: "n_store_3-4", title: "Google Play Store ASO", type: "article", url: "https://developer.android.com/distribute/marketing-tools/aso" },
        { id: "n_store_3-5", title: "app-store-optimization", type: "github", url: "https://github.com/search?q=app-store-optimization" },
        { id: "n_store_3-6", title: "ASO Keyword Cheat Sheet", type: "cheat_sheet", url: "https://www.apptweak.com/en/aso-resources" },
        { id: "n_store_3-7", title: "Deep Dive: A/B Testing App Icons", type: "deep_dive", url: "https://developer.android.com/distribute/best-practices/grow/store-listing-experiments" }
    ]
};

function updateMobileResources(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    for (const [topicId, resources] of Object.entries(resourcesMap)) {
        const topicRegex = new RegExp(`"${topicId}":\\s*{[^}]*?id:\\s*"${topicId}"[\\s\\S]*?resources:\\s*\\[[\\s\\S]*?\\]\\s*\\n\\s*}`, 'g');
        
        content = content.replace(topicRegex, (match) => {
            const resourcesJson = JSON.stringify(resources, null, 12).replace(/"([^"]+)":/g, '$1:');
            const blockRegex = /resources:\s*\[[\s\S]*?\]/;
            return match.replace(blockRegex, `resources: ${resourcesJson}`);
        });
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Mobile resources in ${filePath}`);
}

updateMobileResources(path.join(__dirname, 'src/data/content/mobile/topics.ts'));
