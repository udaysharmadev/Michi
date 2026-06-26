const fs = require('fs');
const path = require('path');

const resourcesMap = {
    // 1. iOS Ecosystem & HIG
    "n_eco_1": [ // Apple Developer Program
        { id: "n_eco_1-1", title: "Apple Developer Program", type: "official", url: "https://developer.apple.com/programs/" },
        { id: "n_eco_1-2", title: "Enrolling in the Developer Program", type: "video_en", url: "https://www.youtube.com/watch?v=R_pD_J8Y-rY" },
        { id: "n_eco_1-3", title: "Apple Dev Account (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Fq_z-eF9vM0" },
        { id: "n_eco_1-4", title: "Certificates, Identifiers & Profiles", type: "article", url: "https://developer.apple.com/help/account/manage-certificates/certificates-overview" },
        { id: "n_eco_1-5", title: "ios-developer-tools", type: "github", url: "https://github.com/vsouza/awesome-ios" },
        { id: "n_eco_1-6", title: "Developer Account Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/support/account/" },
        { id: "n_eco_1-7", title: "Deep Dive: Enterprise Program", type: "deep_dive", url: "https://developer.apple.com/programs/enterprise/" }
    ],
    "n_eco_2": [ // Human Interface Guidelines
        { id: "n_eco_2-1", title: "Apple Human Interface Guidelines", type: "official", url: "https://developer.apple.com/design/human-interface-guidelines/" },
        { id: "n_eco_2-2", title: "Designing for iOS", type: "video_en", url: "https://developer.apple.com/design/human-interface-guidelines/designing-for-ios" },
        { id: "n_eco_2-3", title: "iOS Design Principles (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_eco_2-4", title: "Color and Dark Mode", type: "article", url: "https://developer.apple.com/design/human-interface-guidelines/foundations/color/" },
        { id: "n_eco_2-5", title: "awesome-ios-ui", type: "github", url: "https://github.com/cjwirth/awesome-ios-ui" },
        { id: "n_eco_2-6", title: "HIG Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/design/resources/" },
        { id: "n_eco_2-7", title: "Deep Dive: Typography in iOS", type: "deep_dive", url: "https://developer.apple.com/design/human-interface-guidelines/foundations/typography/" }
    ],
    "n_eco_3": [ // App Store Connect
        { id: "n_eco_3-1", title: "App Store Connect Overview", type: "official", url: "https://developer.apple.com/app-store-connect/" },
        { id: "n_eco_3-2", title: "App Store Connect Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_eco_3-3", title: "App Store Upload (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_eco_3-4", title: "TestFlight Beta Testing", type: "article", url: "https://developer.apple.com/testflight/" },
        { id: "n_eco_3-5", title: "spaceship", type: "github", url: "https://github.com/fastlane/fastlane/tree/master/spaceship" },
        { id: "n_eco_3-6", title: "App Store Connect API Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/documentation/appstoreconnectapi" },
        { id: "n_eco_3-7", title: "Deep Dive: In-App Purchases Setup", type: "deep_dive", url: "https://developer.apple.com/in-app-purchase/" }
    ],
    // 2. Swift Programming
    "n_swift_1": [ // Basic Syntax & Types
        { id: "n_swift_1-1", title: "The Swift Programming Language", type: "official", url: "https://docs.swift.org/swift-book/" },
        { id: "n_swift_1-2", title: "Swift in 100 Seconds", type: "video_en", url: "https://www.youtube.com/watch?v=n3W_vXgGvHU" },
        { id: "n_swift_1-3", title: "Swift Tutorial (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=x0xZ3WjH944" },
        { id: "n_swift_1-4", title: "Swift Variables and Constants", type: "article", url: "https://www.hackingwithswift.com/read/0/2/variables-and-constants" },
        { id: "n_swift_1-5", title: "awesome-swift", type: "github", url: "https://github.com/matteocrippa/awesome-swift" },
        { id: "n_swift_1-6", title: "Swift Cheat Sheet", type: "cheat_sheet", url: "https://github.com/raywenderlich/swift-algorithm-club/wiki/Cheat-Sheet" },
        { id: "n_swift_1-7", title: "Deep Dive: Value vs Reference Types", type: "deep_dive", url: "https://developer.apple.com/swift/blog/?id=10" }
    ],
    "n_swift_2": [ // Optionals & Null Safety
        { id: "n_swift_2-1", title: "Swift Optionals", type: "official", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Optionals" },
        { id: "n_swift_2-2", title: "Optionals Explained", type: "video_en", url: "https://www.youtube.com/watch?v=1bM-0aMszF0" },
        { id: "n_swift_2-3", title: "Swift Optionals (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=H7sQnU-zCII" },
        { id: "n_swift_2-4", title: "Unwrapping Optionals", type: "article", url: "https://www.hackingwithswift.com/read/0/12/optionals" },
        { id: "n_swift_2-5", title: "swift-evolution", type: "github", url: "https://github.com/apple/swift-evolution" },
        { id: "n_swift_2-6", title: "Optionals Cheat Sheet", type: "cheat_sheet", url: "https://www.raywenderlich.com/1396939-swift-cheat-sheet-and-quick-reference" },
        { id: "n_swift_2-7", title: "Deep Dive: Optional Chaining", type: "deep_dive", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/optionalchaining/" }
    ],
    "n_swift_3": [ // OOP & Protocols
        { id: "n_swift_3-1", title: "Protocols in Swift", type: "official", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/" },
        { id: "n_swift_3-2", title: "Protocol Oriented Programming", type: "video_en", url: "https://www.youtube.com/watch?v=g2LwFZatfTI" },
        { id: "n_swift_3-3", title: "Swift OOP (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_swift_3-4", title: "Classes vs Structs", type: "article", url: "https://www.hackingwithswift.com/read/0/15/structs" },
        { id: "n_swift_3-5", title: "swift-algorithm-club", type: "github", url: "https://github.com/raywenderlich/swift-algorithm-club" },
        { id: "n_swift_3-6", title: "Protocols Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/library/archive/documentation/General/Reference/SwiftStandardLibraryReference/index.html" },
        { id: "n_swift_3-7", title: "Deep Dive: Protocol Extensions", type: "deep_dive", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/#Protocol-Extensions" }
    ],
    "n_swift_4": [ // Swift Concurrency
        { id: "n_swift_4-1", title: "Concurrency Docs", type: "official", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/" },
        { id: "n_swift_4-2", title: "Async/Await in Swift", type: "video_en", url: "https://www.youtube.com/watch?v=nQGCwdABCUw" },
        { id: "n_swift_4-3", title: "Swift Concurrency (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=zJg5k6a3rJw" },
        { id: "n_swift_4-4", title: "Actors in Swift", type: "article", url: "https://www.hackingwithswift.com/quick-start/concurrency/what-is-an-actor-and-why-do-we-need-them" },
        { id: "n_swift_4-5", title: "swift-async-algorithms", type: "github", url: "https://github.com/apple/swift-async-algorithms" },
        { id: "n_swift_4-6", title: "Concurrency Cheat Sheet", type: "cheat_sheet", url: "https://www.kodeco.com/28226563-swift-concurrency-cheat-sheet" },
        { id: "n_swift_4-7", title: "Deep Dive: Task Groups", type: "deep_dive", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/#Task-Groups" }
    ],
    // 3. Xcode & Tooling
    "n_xc_1": [ // Xcode Basics
        { id: "n_xc_1-1", title: "Xcode Help", type: "official", url: "https://developer.apple.com/xcode/" },
        { id: "n_xc_1-2", title: "Xcode Tutorial for Beginners", type: "video_en", url: "https://www.youtube.com/watch?v=EOfCEhWq8sg" },
        { id: "n_xc_1-3", title: "Xcode Setup (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_xc_1-4", title: "Getting around Xcode", type: "article", url: "https://www.hackingwithswift.com/read/1/2/getting-around-xcode" },
        { id: "n_xc_1-5", title: "xcode-snippets", type: "github", url: "https://github.com/burczyk/XcodeSwiftSnippets" },
        { id: "n_xc_1-6", title: "Xcode Shortcuts Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/xcode_help-command_shortcuts/CommandShortcuts/CommandShortcuts.html" },
        { id: "n_xc_1-7", title: "Deep Dive: Xcode Build System", type: "deep_dive", url: "https://developer.apple.com/documentation/xcode/build-system" }
    ],
    "n_xc_2": [ // Debugging & Instruments
        { id: "n_xc_2-1", title: "Debugging with Xcode", type: "official", url: "https://developer.apple.com/documentation/xcode/debugging" },
        { id: "n_xc_2-2", title: "Advanced Debugging with LLDB", type: "video_en", url: "https://www.youtube.com/watch?v=bbMsuI2p1DQ" },
        { id: "n_xc_2-3", title: "Xcode Debugging (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_xc_2-4", title: "Instruments Tutorial", type: "article", url: "https://www.raywenderlich.com/397-instruments-tutorial-with-swift-getting-started" },
        { id: "n_xc_2-5", title: "chisel", type: "github", url: "https://github.com/facebook/chisel" },
        { id: "n_xc_2-6", title: "LLDB Cheat Sheet", type: "cheat_sheet", url: "https://lldb.llvm.org/use/map.html" },
        { id: "n_xc_2-7", title: "Deep Dive: Memory Graph Debugger", type: "deep_dive", url: "https://developer.apple.com/documentation/xcode/gathering-information-about-memory-use" }
    ],
    "n_xc_3": [ // Swift Package Manager
        { id: "n_xc_3-1", title: "Swift Package Manager", type: "official", url: "https://www.swift.org/package-manager/" },
        { id: "n_xc_3-2", title: "Using SPM in Xcode", type: "video_en", url: "https://www.youtube.com/watch?v=cT_3E7m-jHk" },
        { id: "n_xc_3-3", title: "Swift Package Manager (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Xh3D74B4xWk" },
        { id: "n_xc_3-4", title: "Creating a Swift Package", type: "article", url: "https://developer.apple.com/documentation/xcode/creating-a-standalone-swift-package" },
        { id: "n_xc_3-5", title: "swift-package-manager", type: "github", url: "https://github.com/apple/swift-package-manager" },
        { id: "n_xc_3-6", title: "Package.swift Cheat Sheet", type: "cheat_sheet", url: "https://docs.swift.org/package-manager/PackageDescription/PackageDescription.html" },
        { id: "n_xc_3-7", title: "Deep Dive: SPM Architecture", type: "deep_dive", url: "https://github.com/apple/swift-package-manager/blob/main/Documentation/Architecture.md" }
    ],
    // 4. UI Development
    "n_ui_1": [ // UIKit Basics
        { id: "n_ui_1-1", title: "UIKit Documentation", type: "official", url: "https://developer.apple.com/documentation/uikit" },
        { id: "n_ui_1-2", title: "UIKit Programmatically", type: "video_en", url: "https://www.youtube.com/watch?v=VPvVD8t02U8" },
        { id: "n_ui_1-3", title: "UIKit Tutorial (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_ui_1-4", title: "View Controller Lifecycle", type: "article", url: "https://developer.apple.com/documentation/uikit/uiviewcontroller" },
        { id: "n_ui_1-5", title: "awesome-uikit", type: "github", url: "https://github.com/cjwirth/awesome-ios-ui" },
        { id: "n_ui_1-6", title: "UIKit Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/UIKitUICatalog/index.html" },
        { id: "n_ui_1-7", title: "Deep Dive: RunLoop in iOS", type: "deep_dive", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/RunLoopManagement/RunLoopManagement.html" }
    ],
    "n_ui_2": [ // Auto Layout
        { id: "n_ui_2-1", title: "Auto Layout Guide", type: "official", url: "https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html" },
        { id: "n_ui_2-2", title: "Auto Layout Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=jT2gGfsU0nE" },
        { id: "n_ui_2-3", title: "Auto Layout in Xcode (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_ui_2-4", title: "Understanding Constraints", type: "article", url: "https://www.hackingwithswift.com/read/6/2/advanced-auto-layout" },
        { id: "n_ui_2-5", title: "SnapKit", type: "github", url: "https://github.com/SnapKit/SnapKit" },
        { id: "n_ui_2-6", title: "Auto Layout Cheat Sheet", type: "cheat_sheet", url: "https://www.raywenderlich.com/1396939-auto-layout-cheat-sheet" },
        { id: "n_ui_2-7", title: "Deep Dive: Auto Layout Engine", type: "deep_dive", url: "https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/AnatomyofaConstraint.html" }
    ],
    "n_ui_3": [ // SwiftUI
        { id: "n_ui_3-1", title: "SwiftUI Documentation", type: "official", url: "https://developer.apple.com/xcode/swiftui/" },
        { id: "n_ui_3-2", title: "SwiftUI Crash Course", type: "video_en", url: "https://www.youtube.com/watch?v=cDgwZvsJ00w" },
        { id: "n_ui_3-3", title: "SwiftUI Tutorial (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=M9mP4wR3R_0" },
        { id: "n_ui_3-4", title: "State Management in SwiftUI", type: "article", url: "https://developer.apple.com/documentation/swiftui/managing-user-interface-state" },
        { id: "n_ui_3-5", title: "swiftui-animations", type: "github", url: "https://github.com/amosgyamfi/swiftui-animations" },
        { id: "n_ui_3-6", title: "SwiftUI Cheat Sheet", type: "cheat_sheet", url: "https://github.com/SimpleBoilerplates/SwiftUI-Cheat-Sheet" },
        { id: "n_ui_3-7", title: "Deep Dive: SwiftUI Render Loop", type: "deep_dive", url: "https://developer.apple.com/documentation/swiftui/view" }
    ],
    "n_ui_4": [ // Animations & Transitions
        { id: "n_ui_4-1", title: "Core Animation", type: "official", url: "https://developer.apple.com/documentation/quartzcore" },
        { id: "n_ui_4-2", title: "Advanced iOS Animations", type: "video_en", url: "https://www.youtube.com/watch?v=XQMUMMAC2K0" },
        { id: "n_ui_4-3", title: "iOS Animations (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=x0xZ3WjH944" },
        { id: "n_ui_4-4", title: "Lottie in iOS", type: "article", url: "https://airbnb.io/lottie/#/ios" },
        { id: "n_ui_4-5", title: "lottie-ios", type: "github", url: "https://github.com/airbnb/lottie-ios" },
        { id: "n_ui_4-6", title: "Animation Curves Cheat Sheet", type: "cheat_sheet", url: "https://easings.net/" },
        { id: "n_ui_4-7", title: "Deep Dive: CAPropertyAnimation", type: "deep_dive", url: "https://developer.apple.com/documentation/quartzcore/capropertyanimation" }
    ],
    // 5. App Architecture
    "n_arch_1": [ // MVC (Model-View-Controller)
        { id: "n_arch_1-1", title: "Model-View-Controller", type: "official", url: "https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html" },
        { id: "n_arch_1-2", title: "MVC in iOS", type: "video_en", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_arch_1-3", title: "MVC Architecture (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_arch_1-4", title: "Massive View Controller Problem", type: "article", url: "https://www.hackingwithswift.com/articles/123/how-to-fix-massive-view-controller" },
        { id: "n_arch_1-5", title: "ios-architecture", type: "github", url: "https://github.com/onmyway133/awesome-ios-architecture" },
        { id: "n_arch_1-6", title: "MVC Cheat Sheet", type: "cheat_sheet", url: "https://medium.com/ios-os-x-development/ios-architecture-patterns-ecba4c38de52" },
        { id: "n_arch_1-7", title: "Deep Dive: iOS Architecture Patterns", type: "deep_dive", url: "https://medium.com/ios-os-x-development/ios-architecture-patterns-ecba4c38de52" }
    ],
    "n_arch_2": [ // MVVM & Clean Architecture
        { id: "n_arch_2-1", title: "Designing Apps with MVVM", type: "official", url: "https://developer.apple.com/documentation/swiftui/managing-user-interface-state" },
        { id: "n_arch_2-2", title: "MVVM in iOS", type: "video_en", url: "https://www.youtube.com/watch?v=m4J_4yR8P1o" },
        { id: "n_arch_2-3", title: "MVVM Pattern (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_arch_2-4", title: "Clean Architecture in iOS", type: "article", url: "https://tech.olx.com/clean-architecture-and-mvvm-on-ios-c9d167d9f5b3" },
        { id: "n_arch_2-5", title: "Clean-Architecture-Swift", type: "github", url: "https://github.com/kudoleh/iOS-Clean-Architecture-MVVM" },
        { id: "n_arch_2-6", title: "MVVM Cheat Sheet", type: "cheat_sheet", url: "https://github.com/onmyway133/awesome-ios-architecture" },
        { id: "n_arch_2-7", title: "Deep Dive: Coordinators Pattern", type: "deep_dive", url: "https://khanlou.com/2015/01/the-coordinator/" }
    ],
    "n_arch_3": [ // Combine Framework
        { id: "n_arch_3-1", title: "Combine Documentation", type: "official", url: "https://developer.apple.com/documentation/combine" },
        { id: "n_arch_3-2", title: "Getting Started with Combine", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_arch_3-3", title: "Reactive Programming (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=zJg5k6a3rJw" },
        { id: "n_arch_3-4", title: "Combine vs RxSwift", type: "article", url: "https://www.raywenderlich.com/7826689-combine-vs-rxswift" },
        { id: "n_arch_3-5", title: "OpenCombine", type: "github", url: "https://github.com/OpenCombine/OpenCombine" },
        { id: "n_arch_3-6", title: "Combine Cheat Sheet", type: "cheat_sheet", url: "https://heckj.github.io/swiftui-notes/" },
        { id: "n_arch_3-7", title: "Deep Dive: Custom Publishers", type: "deep_dive", url: "https://developer.apple.com/documentation/combine/creating-custom-publishers" }
    ],
    // 6. Core Data & Storage
    "n_data_1": [ // Core Data Basics
        { id: "n_data_1-1", title: "Core Data Overview", type: "official", url: "https://developer.apple.com/documentation/coredata" },
        { id: "n_data_1-2", title: "Core Data Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=0cg09tlAAK0" },
        { id: "n_data_1-3", title: "Core Data iOS (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=H7sQnU-zCII" },
        { id: "n_data_1-4", title: "Setting up Core Data", type: "article", url: "https://www.hackingwithswift.com/read/38/2/designing-a-core-data-model" },
        { id: "n_data_1-5", title: "MagicalRecord", type: "github", url: "https://github.com/magicalpanda/MagicalRecord" },
        { id: "n_data_1-6", title: "Core Data Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html" },
        { id: "n_data_1-7", title: "Deep Dive: Core Data Threading", type: "deep_dive", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/Concurrency.html" }
    ],
    "n_data_2": [ // SwiftData
        { id: "n_data_2-1", title: "SwiftData Documentation", type: "official", url: "https://developer.apple.com/xcode/swiftdata/" },
        { id: "n_data_2-2", title: "Introduction to SwiftData", type: "video_en", url: "https://www.youtube.com/watch?v=1FJEIEHkC_c" },
        { id: "n_data_2-3", title: "SwiftData (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Fq_z-eF9vM0" },
        { id: "n_data_2-4", title: "Migrating from Core Data", type: "article", url: "https://developer.apple.com/documentation/coredata/modeling_data/migrating_to_swiftdata" },
        { id: "n_data_2-5", title: "swift-data-samples", type: "github", url: "https://github.com/apple/sample-swiftdata" },
        { id: "n_data_2-6", title: "SwiftData Cheat Sheet", type: "cheat_sheet", url: "https://www.hackingwithswift.com/quick-start/swiftdata" },
        { id: "n_data_2-7", title: "Deep Dive: SwiftData Predicates", type: "deep_dive", url: "https://developer.apple.com/documentation/foundation/predicate" }
    ],
    "n_data_3": [ // UserDefaults & Keychain
        { id: "n_data_3-1", title: "UserDefaults", type: "official", url: "https://developer.apple.com/documentation/foundation/userdefaults" },
        { id: "n_data_3-2", title: "Saving Data in iOS", type: "video_en", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_data_3-3", title: "UserDefaults & Keychain (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_data_3-4", title: "Securely Storing Data", type: "article", url: "https://developer.apple.com/documentation/security/keychain_services" },
        { id: "n_data_3-5", title: "KeychainAccess", type: "github", url: "https://github.com/kishikawakatsumi/KeychainAccess" },
        { id: "n_data_3-6", title: "UserDefaults Cheat Sheet", type: "cheat_sheet", url: "https://www.hackingwithswift.com/read/12/2/reading-and-writing-basics-userdefaults" },
        { id: "n_data_3-7", title: "Deep Dive: Keychain Services API", type: "deep_dive", url: "https://developer.apple.com/documentation/security/keychain_services/keychain_items" }
    ],
    "n_data_4": [ // File System (FileManager)
        { id: "n_data_4-1", title: "FileManager Documentation", type: "official", url: "https://developer.apple.com/documentation/foundation/filemanager" },
        { id: "n_data_4-2", title: "File System in iOS", type: "video_en", url: "https://www.youtube.com/watch?v=bbMsuI2p1DQ" },
        { id: "n_data_4-3", title: "FileManager (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_data_4-4", title: "App Sandbox Directories", type: "article", url: "https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html" },
        { id: "n_data_4-5", title: "Files", type: "github", url: "https://github.com/JohnSundell/Files" },
        { id: "n_data_4-6", title: "FileManager Cheat Sheet", type: "cheat_sheet", url: "https://www.ioscreator.com/tutorials/filemanager-tutorial-ios-swift" },
        { id: "n_data_4-7", title: "Deep Dive: UIDocument", type: "deep_dive", url: "https://developer.apple.com/documentation/uikit/uidocument" }
    ],
    // 7. Networking
    "n_net_1": [ // URLSession Basics
        { id: "n_net_1-1", title: "URLSession Overview", type: "official", url: "https://developer.apple.com/documentation/foundation/urlsession" },
        { id: "n_net_1-2", title: "URLSession Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=5vTqH2csJiE" },
        { id: "n_net_1-3", title: "API Calling in iOS (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=x0xZ3WjH944" },
        { id: "n_net_1-4", title: "Fetching Data from the Internet", type: "article", url: "https://developer.apple.com/documentation/foundation/url_loading_system/fetching_website_data_into_memory" },
        { id: "n_net_1-5", title: "Alamofire", type: "github", url: "https://github.com/Alamofire/Alamofire" },
        { id: "n_net_1-6", title: "URLSession Cheat Sheet", type: "cheat_sheet", url: "https://www.raywenderlich.com/3244963-urlsession-tutorial-getting-started" },
        { id: "n_net_1-7", title: "Deep Dive: Background Sessions", type: "deep_dive", url: "https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1411597-background" }
    ],
    "n_net_2": [ // JSON & Codable
        { id: "n_net_2-1", title: "Encoding and Decoding Custom Types", type: "official", url: "https://developer.apple.com/documentation/foundation/archives_and_serialization/encoding_and_decoding_custom_types" },
        { id: "n_net_2-2", title: "JSON Parsing in Swift", type: "video_en", url: "https://www.youtube.com/watch?v=nQGCwdABCUw" },
        { id: "n_net_2-3", title: "Codable Protocol (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=jW_nK6O5F6w" },
        { id: "n_net_2-4", title: "Using the Codable Protocol", type: "article", url: "https://www.hackingwithswift.com/read/7/3/parsing-json-using-the-codable-protocol" },
        { id: "n_net_2-5", title: "SwiftyJSON", type: "github", url: "https://github.com/SwiftyJSON/SwiftyJSON" },
        { id: "n_net_2-6", title: "Codable Cheat Sheet", type: "cheat_sheet", url: "https://benscheirman.com/2017/06/swift-json/" },
        { id: "n_net_2-7", title: "Deep Dive: Custom KeyDecodingStrategy", type: "deep_dive", url: "https://developer.apple.com/documentation/foundation/jsondecoder/keydecodingstrategy" }
    ],
    "n_net_3": [ // Websockets
        { id: "n_net_3-1", title: "URLSessionWebSocketTask", type: "official", url: "https://developer.apple.com/documentation/foundation/urlsessionwebsockettask" },
        { id: "n_net_3-2", title: "WebSockets in iOS", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_net_3-3", title: "Real-time Apps in iOS (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_net_3-4", title: "Getting started with WebSockets", type: "article", url: "https://www.raywenderlich.com/861-websockets-on-ios-with-starscream" },
        { id: "n_net_3-5", title: "Starscream", type: "github", url: "https://github.com/daltoniam/Starscream" },
        { id: "n_net_3-6", title: "WebSocket Cheat Sheet", type: "cheat_sheet", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
        { id: "n_net_3-7", title: "Deep Dive: Network.framework", type: "deep_dive", url: "https://developer.apple.com/documentation/network" }
    ],
    // 8. Concurrency
    "n_conc_1": [ // Grand Central Dispatch (GCD)
        { id: "n_conc_1-1", title: "Dispatch Overview", type: "official", url: "https://developer.apple.com/documentation/dispatch" },
        { id: "n_conc_1-2", title: "GCD Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=g2LwFZatfTI" },
        { id: "n_conc_1-3", title: "DispatchQueue (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_conc_1-4", title: "Understanding GCD", type: "article", url: "https://www.raywenderlich.com/5370-grand-central-dispatch-tutorial-for-swift-4-part-1-2" },
        { id: "n_conc_1-5", title: "gcd-examples", type: "github", url: "https://github.com/apple/swift-corelibs-libdispatch" },
        { id: "n_conc_1-6", title: "GCD Cheat Sheet", type: "cheat_sheet", url: "https://github.com/raywenderlich/swift-algorithm-club/tree/master/GCD" },
        { id: "n_conc_1-7", title: "Deep Dive: DispatchGroups", type: "deep_dive", url: "https://developer.apple.com/documentation/dispatch/dispatchgroup" }
    ],
    "n_conc_2": [ // Operation Queues
        { id: "n_conc_2-1", title: "OperationQueue", type: "official", url: "https://developer.apple.com/documentation/foundation/operationqueue" },
        { id: "n_conc_2-2", title: "Operations & OperationQueues", type: "video_en", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_conc_2-3", title: "NSOperationQueue (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_conc_2-4", title: "When to use OperationQueues", type: "article", url: "https://www.raywenderlich.com/5293-operation-and-operationqueue-tutorial-in-swift" },
        { id: "n_conc_2-5", title: "AdvancedNSOperations", type: "github", url: "https://developer.apple.com/library/archive/samplecode/AdvancedNSOperations/Introduction/Intro.html" },
        { id: "n_conc_2-6", title: "Operation Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/documentation/foundation/operation" },
        { id: "n_conc_2-7", title: "Deep Dive: Operation Dependencies", type: "deep_dive", url: "https://developer.apple.com/documentation/foundation/operation/1412859-adddependency" }
    ],
    "n_conc_3": [ // Modern Swift Concurrency (Async/Await)
        { id: "n_conc_3-1", title: "Concurrency in Swift", type: "official", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/" },
        { id: "n_conc_3-2", title: "Async/Await Explained", type: "video_en", url: "https://www.youtube.com/watch?v=nQGCwdABCUw" },
        { id: "n_conc_3-3", title: "Modern Concurrency (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=Xh3D74B4xWk" },
        { id: "n_conc_3-4", title: "Understanding Task and await", type: "article", url: "https://www.hackingwithswift.com/quick-start/concurrency" },
        { id: "n_conc_3-5", title: "swift-async-algorithms", type: "github", url: "https://github.com/apple/swift-async-algorithms" },
        { id: "n_conc_3-6", title: "Async/Await Cheat Sheet", type: "cheat_sheet", url: "https://www.kodeco.com/28226563-swift-concurrency-cheat-sheet" },
        { id: "n_conc_3-7", title: "Deep Dive: MainActor", type: "deep_dive", url: "https://developer.apple.com/documentation/swift/mainactor" }
    ],
    // 9. Device Capabilities
    "n_dev_1": [ // Core Location
        { id: "n_dev_1-1", title: "Core Location", type: "official", url: "https://developer.apple.com/documentation/corelocation" },
        { id: "n_dev_1-2", title: "Getting User Location", type: "video_en", url: "https://www.youtube.com/watch?v=P2lX8m6l66Y" },
        { id: "n_dev_1-3", title: "Maps & Location (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=H7sQnU-zCII" },
        { id: "n_dev_1-4", title: "Using Core Location in iOS", type: "article", url: "https://www.raywenderlich.com/7399432-core-location-tutorial-for-ios-tracking-visited-locations" },
        { id: "n_dev_1-5", title: "MapKit-Samples", type: "github", url: "https://github.com/apple/sample-mapkit" },
        { id: "n_dev_1-6", title: "Location Permissions Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/documentation/corelocation/requesting_authorization_to_use_location_services" },
        { id: "n_dev_1-7", title: "Deep Dive: Geofencing", type: "deep_dive", url: "https://developer.apple.com/documentation/corelocation/monitoring_the_user_s_proximity_to_geographic_regions" }
    ],
    "n_dev_2": [ // AVFoundation (Camera/Audio)
        { id: "n_dev_2-1", title: "AVFoundation Overview", type: "official", url: "https://developer.apple.com/documentation/avfoundation" },
        { id: "n_dev_2-2", title: "Building a Custom Camera App", type: "video_en", url: "https://www.youtube.com/watch?v=bbMsuI2p1DQ" },
        { id: "n_dev_2-3", title: "Camera & AVFoundation (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=0k9rL-Y4k80" },
        { id: "n_dev_2-4", title: "Capturing Photos", type: "article", url: "https://developer.apple.com/documentation/avfoundation/capture_setup/capturing_still_and_live_photos" },
        { id: "n_dev_2-5", title: "AVCam", type: "github", url: "https://developer.apple.com/documentation/avfoundation/capture_setup/avcam_building_a_camera_app" },
        { id: "n_dev_2-6", title: "AVFoundation Cheat Sheet", type: "cheat_sheet", url: "https://github.com/cielart/AVFoundation-CheatSheet" },
        { id: "n_dev_2-7", title: "Deep Dive: Video Processing", type: "deep_dive", url: "https://developer.apple.com/documentation/avfoundation/audio_and_video_processing" }
    ],
    "n_dev_3": [ // Push Notifications
        { id: "n_dev_3-1", title: "UserNotifications Framework", type: "official", url: "https://developer.apple.com/documentation/usernotifications" },
        { id: "n_dev_3-2", title: "Push Notifications Tutorial", type: "video_en", url: "https://www.youtube.com/watch?v=1FJEIEHkC_c" },
        { id: "n_dev_3-3", title: "APNs Setup (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=x0xZ3WjH944" },
        { id: "n_dev_3-4", title: "Configuring APNs", type: "article", url: "https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server" },
        { id: "n_dev_3-5", title: "Houston (APNs Ruby)", type: "github", url: "https://github.com/nomad/houston" },
        { id: "n_dev_3-6", title: "APNs Payload Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification" },
        { id: "n_dev_3-7", title: "Deep Dive: Notification Service Extensions", type: "deep_dive", url: "https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension" }
    ],
    // 10. App Store Deployment
    "n_dep_1": [ // Provisioning Profiles
        { id: "n_dep_1-1", title: "Certificates & Profiles", type: "official", url: "https://developer.apple.com/help/account/manage-profiles/create-an-app-store-provisioning-profile/" },
        { id: "n_dep_1-2", title: "Code Signing in Xcode", type: "video_en", url: "https://www.youtube.com/watch?v=g2LwFZatfTI" },
        { id: "n_dep_1-3", title: "Provisioning Profiles (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=cM34B3zN19I" },
        { id: "n_dep_1-4", title: "Understanding iOS Code Signing", type: "article", url: "https://codesigning.guide/" },
        { id: "n_dep_1-5", title: "fastlane/match", type: "github", url: "https://github.com/fastlane/fastlane/tree/master/match" },
        { id: "n_dep_1-6", title: "Code Signing Cheat Sheet", type: "cheat_sheet", url: "https://docs.fastlane.tools/codesigning/getting-started/" },
        { id: "n_dep_1-7", title: "Deep Dive: Entitlements", type: "deep_dive", url: "https://developer.apple.com/documentation/bundleresources/entitlements" }
    ],
    "n_dep_2": [ // TestFlight
        { id: "n_dep_2-1", title: "TestFlight Help", type: "official", url: "https://developer.apple.com/testflight/" },
        { id: "n_dep_2-2", title: "Deploying to TestFlight", type: "video_en", url: "https://www.youtube.com/watch?v=Z_aA0aE2Wj0" },
        { id: "n_dep_2-3", title: "TestFlight Upload (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=9_zW7Zt5rRk" },
        { id: "n_dep_2-4", title: "Beta Testing your iOS App", type: "article", url: "https://www.raywenderlich.com/10204910-testflight-tutorial-ios-beta-testing" },
        { id: "n_dep_2-5", title: "fastlane/pilot", type: "github", url: "https://github.com/fastlane/fastlane/tree/master/pilot" },
        { id: "n_dep_2-6", title: "TestFlight Roles Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/help/app-store-connect/manage-users-and-roles/role-permissions" },
        { id: "n_dep_2-7", title: "Deep Dive: TestFlight App Review", type: "deep_dive", url: "https://developer.apple.com/help/app-store-connect/test-a-beta-version/submit-an-app-for-beta-app-review" }
    ],
    "n_dep_3": [ // App Store Guidelines
        { id: "n_dep_3-1", title: "App Store Review Guidelines", type: "official", url: "https://developer.apple.com/app-store/review/guidelines/" },
        { id: "n_dep_3-2", title: "App Store Rejection Reasons", type: "video_en", url: "https://www.youtube.com/watch?v=O13_tQeC94I" },
        { id: "n_dep_3-3", title: "App Store Rejections (Hindi)", type: "video_hi", url: "https://www.youtube.com/watch?v=H7sQnU-zCII" },
        { id: "n_dep_3-4", title: "How to avoid App Store Rejection", type: "article", url: "https://developer.apple.com/app-store/review/rejections/" },
        { id: "n_dep_3-5", title: "app-store-guidelines", type: "github", url: "https://github.com/apple/swift-evolution" },
        { id: "n_dep_3-6", title: "Review Guidelines Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/app-store/review/guidelines/" },
        { id: "n_dep_3-7", title: "Deep Dive: Privacy Nutrition Labels", type: "deep_dive", url: "https://developer.apple.com/app-store/app-privacy-details/" }
    ]
};

function updateIosResources(filePath) {
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
    console.log(`Updated iOS resources in ${filePath}`);
}

updateIosResources(path.join(__dirname, 'src/data/content/ios/topics.ts'));
