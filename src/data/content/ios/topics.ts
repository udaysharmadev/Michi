import { TopicData } from "@/data/types";

export const topicsData: Record<string, TopicData> = {
    // --- 1. iOS Ecosystem & HIG ---
    "n_eco_1": {
        title: "Apple Developer Program",
        description: "Understand the requirements, costs, and benefits of joining the Apple Developer Program.",
        resources: [
            { title: "Apple Developer Program Overview", type: "official", url: "https://developer.apple.com/programs/" },
            { title: "How to Set Up Apple Developer Account (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "Apple Developer Account Setup in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Certificates, Identifiers & Profiles Guide", type: "article", url: "https://developer.apple.com/help/account/manage-certificates/certificates-overview" },
            { title: "vsouza/awesome-ios", type: "github", url: "https://github.com/vsouza/awesome-ios" },
            { title: "Developer Account Management", type: "cheat_sheet", url: "https://developer.apple.com/support/account/" },
            { title: "Enterprise Developer Program Deep Dive", type: "deep_dive", url: "https://developer.apple.com/programs/enterprise/" }
        ]
    },
    "n_eco_2": {
        title: "Human Interface Guidelines",
        description: "Learn Apple's design principles and guidelines to create apps that feel native and intuitive on iOS.",
        resources: [
            { title: "Apple Human Interface Guidelines", type: "official", url: "https://developer.apple.com/design/human-interface-guidelines/" },
            { title: "iOS Design Principles Explained (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "HIG for iOS in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Color and Dark Mode in HIG", type: "article", url: "https://developer.apple.com/design/human-interface-guidelines/color" },
            { title: "cjwirth/awesome-ios-ui", type: "github", url: "https://github.com/cjwirth/awesome-ios-ui" },
            { title: "Apple Design Resources", type: "cheat_sheet", url: "https://developer.apple.com/design/resources/" },
            { title: "HIG Typography & Icons", type: "deep_dive", url: "https://developer.apple.com/design/human-interface-guidelines/typography" }
        ]
    },
    "n_eco_3": {
        title: "App Sandbox & Privacy",
        description: "Understand how iOS secures user data through app sandboxing and strict privacy permission requirements.",
        resources: [
            { title: "App Sandbox Design Guide", type: "official", url: "https://developer.apple.com/documentation/security/app_sandbox" },
            { title: "iOS Privacy Permissions Explained (Paul Hudson)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "App Privacy in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Privacy in iOS Apps", type: "article", url: "https://developer.apple.com/documentation/uikit/protecting_the_user_s_privacy" },
            { title: "fastlane/spaceship", type: "github", url: "https://github.com/fastlane/fastlane/tree/master/spaceship" },
            { title: "Privacy Nutrition Labels Reference", type: "cheat_sheet", url: "https://developer.apple.com/app-store/app-privacy-details/" },
            { title: "App Entitlements Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/bundleresources/entitlements" }
        ]
    },
    // --- 2. Swift Programming ---
    "n_swift_1": {
        title: "Swift Syntax & Types",
        description: "Learn the basics of Swift: variables, constants, data types, control flow, and functions.",
        resources: [
            { title: "The Swift Programming Language (Official Book)", type: "official", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/" },
            { title: "Swift in 100 Seconds (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=n3W_vXgGvHU" },
            { title: "Swift Programming Full Course in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Swift Variables and Constants – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/sixty/1/1/variables" },
            { title: "matteocrippa/awesome-swift", type: "github", url: "https://github.com/matteocrippa/awesome-swift" },
            { title: "Swift Cheat Sheet (devhints.io)", type: "cheat_sheet", url: "https://devhints.io/swift" },
            { title: "Value Types vs Reference Types Deep Dive", type: "deep_dive", url: "https://developer.apple.com/swift/blog/?id=10" }
        ]
    },
    "n_swift_2": {
        title: "Optionals & Error Handling",
        description: "Use Swift optionals to safely work with missing values and handle errors using do-catch.",
        resources: [
            { title: "Optionals in Swift (Official)", type: "official", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Optionals" },
            { title: "Swift Optionals for Beginners (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=n3W_vXgGvHU" },
            { title: "Optionals in Swift Hindi (Code with Chris)", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Understanding Optionals – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/sixty/10/1/handling-missing-data" },
            { title: "apple/swift-evolution", type: "github", url: "https://github.com/apple/swift-evolution" },
            { title: "Optional Chaining Quick Reference", type: "cheat_sheet", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/optionalchaining/" },
            { title: "Error Handling in Swift Deep Dive", type: "deep_dive", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/" }
        ]
    },
    "n_swift_3": {
        title: "OOP & Protocols",
        description: "Master Swift classes, structs, inheritance, and protocol-oriented programming.",
        resources: [
            { title: "Protocols in Swift (Official)", type: "official", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/" },
            { title: "Protocol Oriented Programming in Swift (Apple WWDC)", type: "video_en", url: "https://developer.apple.com/videos/play/wwdc2015/408/" },
            { title: "Swift OOP in Hindi (Smart Programming)", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Classes vs Structs – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/plus/advanced-swift/when-to-use-structs-and-when-to-use-classes" },
            { title: "raywenderlich/swift-algorithm-club", type: "github", url: "https://github.com/kodecocodes/swift-algorithm-club" },
            { title: "Swift Protocols Cheat Sheet", type: "cheat_sheet", url: "https://www.raywenderlich.com/4951992-kotlin-cheat-sheet-and-quick-reference" },
            { title: "Protocol Extensions Deep Dive", type: "deep_dive", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/#Protocol-Extensions" }
        ]
    },
    "n_swift_4": {
        title: "Concurrency (async/await)",
        description: "Write concurrent Swift code with async/await, actors, and structured concurrency.",
        resources: [
            { title: "Concurrency in Swift (Official)", type: "official", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/" },
            { title: "Swift Concurrency - async/await (Paul Hudson)", type: "video_en", url: "https://www.youtube.com/watch?v=n3W_vXgGvHU" },
            { title: "Swift Concurrency in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Async/Await in Swift – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/quick-start/concurrency/what-is-async-await" },
            { title: "apple/swift-async-algorithms", type: "github", url: "https://github.com/apple/swift-async-algorithms" },
            { title: "Swift Concurrency Cheat Sheet (Kodeco)", type: "cheat_sheet", url: "https://www.kodeco.com/28226563-swift-concurrency-cheat-sheet" },
            { title: "MainActor & Actor Isolation Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/swift/mainactor" }
        ]
    },
    // --- 3. Xcode & Tooling ---
    "n_xcode_1": {
        title: "Xcode Basics",
        description: "Set up Xcode, navigate the IDE, manage simulators, and build your first iOS project.",
        resources: [
            { title: "Xcode Overview (Apple)", type: "official", url: "https://developer.apple.com/xcode/" },
            { title: "Xcode Tutorial for Beginners (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=CwA1VWP0Ldw" },
            { title: "Xcode Setup and First App in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Getting Around Xcode – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/read/1/2/getting-around-xcode" },
            { title: "burczyk/XcodeSwiftSnippets", type: "github", url: "https://github.com/burczyk/XcodeSwiftSnippets" },
            { title: "Xcode Keyboard Shortcuts Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/xcode_help-command_shortcuts/CommandShortcuts/CommandShortcuts.html" },
            { title: "Xcode Build System Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/xcode/build-system" }
        ]
    },
    "n_xcode_2": {
        title: "Debugging & Instruments",
        description: "Debug iOS apps with LLDB, breakpoints, and Instruments to find performance bottlenecks.",
        resources: [
            { title: "Debugging in Xcode (Apple)", type: "official", url: "https://developer.apple.com/documentation/xcode/diagnosing-and-resolving-bugs-in-your-running-app" },
            { title: "Advanced Debugging with Xcode & LLDB (WWDC)", type: "video_en", url: "https://developer.apple.com/videos/play/wwdc2018/412/" },
            { title: "Xcode Debugging in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Instruments Tutorial – Kodeco", type: "article", url: "https://www.kodeco.com/16126261-instruments-tutorial-with-swift-getting-started" },
            { title: "facebook/chisel (LLDB Helpers)", type: "github", url: "https://github.com/facebook/chisel" },
            { title: "LLDB Command Cheat Sheet", type: "cheat_sheet", url: "https://lldb.llvm.org/use/map.html" },
            { title: "Memory Graph Debugger Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/xcode/gathering-information-about-memory-use" }
        ]
    },
    "n_xcode_3": {
        title: "Swift Package Manager",
        description: "Manage third-party dependencies with the Swift Package Manager (SPM) integrated in Xcode.",
        resources: [
            { title: "Swift Package Manager (Official)", type: "official", url: "https://www.swift.org/package-manager/" },
            { title: "Using SPM in Xcode (Paul Hudson)", type: "video_en", url: "https://www.youtube.com/watch?v=CwA1VWP0Ldw" },
            { title: "SPM in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Creating Your First Swift Package", type: "article", url: "https://developer.apple.com/documentation/xcode/creating-a-standalone-swift-package-with-xcode" },
            { title: "apple/swift-package-manager", type: "github", url: "https://github.com/apple/swift-package-manager" },
            { title: "Package.swift Reference", type: "cheat_sheet", url: "https://docs.swift.org/package-manager/PackageDescription/PackageDescription.html" },
            { title: "SPM vs CocoaPods vs Carthage", type: "deep_dive", url: "https://www.swift.org/blog/swift-package-registry/" }
        ]
    },
    // --- 4. UI Development ---
    "n_ui_1": {
        title: "UIKit Basics",
        description: "Build iOS user interfaces programmatically and with Interface Builder using UIKit.",
        resources: [
            { title: "UIKit Documentation (Apple)", type: "official", url: "https://developer.apple.com/documentation/uikit" },
            { title: "UIKit Full Course (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=b1oC7sLIgpI" },
            { title: "UIKit Tutorial in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "View Controller Lifecycle", type: "article", url: "https://developer.apple.com/documentation/uikit/uiviewcontroller" },
            { title: "cjwirth/awesome-ios-ui", type: "github", url: "https://github.com/cjwirth/awesome-ios-ui" },
            { title: "UIKit View Hierarchy Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/WindowsandViews/WindowsandViews.html" },
            { title: "Custom UIView Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/uikit/uiview" }
        ]
    },
    "n_ui_2": {
        title: "Auto Layout",
        description: "Create adaptive, responsive layouts using Auto Layout, constraints, and StackViews.",
        resources: [
            { title: "Auto Layout Guide (Apple)", type: "official", url: "https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html" },
            { title: "Auto Layout Tutorial (Kodeco)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "Auto Layout in Xcode Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Understanding Auto Layout Constraints", type: "article", url: "https://www.hackingwithswift.com/read/6/2/advanced-auto-layout" },
            { title: "SnapKit/SnapKit", type: "github", url: "https://github.com/SnapKit/SnapKit" },
            { title: "Auto Layout Cheat Sheet", type: "cheat_sheet", url: "https://www.kodeco.com/811496-auto-layout-tutorial-in-ios" },
            { title: "Auto Layout Engine Deep Dive", type: "deep_dive", url: "https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/AnatomyofaConstraint.html" }
        ]
    },
    "n_ui_3": {
        title: "SwiftUI",
        description: "Build UIs declaratively with Apple's SwiftUI framework using views, state, and data binding.",
        resources: [
            { title: "SwiftUI Documentation (Apple)", type: "official", url: "https://developer.apple.com/xcode/swiftui/" },
            { title: "SwiftUI Full Tutorial (Paul Hudson - 100 Days of SwiftUI)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "SwiftUI Crash Course in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Managing User Interface State in SwiftUI", type: "article", url: "https://developer.apple.com/documentation/swiftui/managing-user-interface-state" },
            { title: "amosgyamfi/swiftui-animations", type: "github", url: "https://github.com/amosgyamfi/swiftui-animations" },
            { title: "SwiftUI Cheat Sheet by SimpleBoilerplates", type: "cheat_sheet", url: "https://github.com/SimpleBoilerplates/SwiftUI-Cheat-Sheet" },
            { title: "SwiftUI View Rendering Lifecycle Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/swiftui/view" }
        ]
    },
    "n_ui_4": {
        title: "Animations & Transitions",
        description: "Add life to your UI with Core Animation, UIView animations, SwiftUI transitions, and Lottie.",
        resources: [
            { title: "Core Animation (Apple)", type: "official", url: "https://developer.apple.com/documentation/quartzcore" },
            { title: "iOS Animations Tutorial (Kodeco)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "iOS Animations in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "UIView.animate Explained – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/read/15/1/preparing-for-action" },
            { title: "airbnb/lottie-ios", type: "github", url: "https://github.com/airbnb/lottie-ios" },
            { title: "Animation Easing Curves Reference", type: "cheat_sheet", url: "https://easings.net/" },
            { title: "CALayer & CAPropertyAnimation Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/quartzcore/capropertyanimation" }
        ]
    },
    // --- 5. App Architecture ---
    "n_arch_1": {
        title: "MVC Pattern",
        description: "Learn Apple's traditional Model-View-Controller architecture and its role in UIKit-based apps.",
        resources: [
            { title: "Model-View-Controller (Apple)", type: "official", url: "https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html" },
            { title: "MVC in iOS Explained (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "MVC Architecture in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Solving the Massive View Controller Problem", type: "article", url: "https://www.hackingwithswift.com/articles/123/how-to-fix-massive-view-controller" },
            { title: "onmyway133/awesome-ios-architecture", type: "github", url: "https://github.com/onmyway133/awesome-ios-architecture" },
            { title: "iOS Architecture Patterns Overview", type: "cheat_sheet", url: "https://medium.com/ios-os-x-development/ios-architecture-patterns-ecba4c38de52" },
            { title: "Coordinator Pattern in iOS", type: "deep_dive", url: "https://khanlou.com/2015/01/the-coordinator/" }
        ]
    },
    "n_arch_2": {
        title: "MVVM & Clean Architecture",
        description: "Build scalable iOS apps with MVVM, Combine, and Clean Architecture's layered approach.",
        resources: [
            { title: "Designing for Testability with MVVM (Apple)", type: "official", url: "https://developer.apple.com/documentation/swiftui/managing-user-interface-state" },
            { title: "MVVM in iOS with SwiftUI (Phillip Lackner style)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "MVVM in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Clean Architecture on iOS (ProAndroidDev equivalent)", type: "article", url: "https://tech.olx.com/clean-architecture-and-mvvm-on-ios-c9d167d9f5b3" },
            { title: "kudoleh/iOS-Clean-Architecture-MVVM", type: "github", url: "https://github.com/kudoleh/iOS-Clean-Architecture-MVVM" },
            { title: "MVVM Layers Cheat Sheet", type: "cheat_sheet", url: "https://github.com/onmyway133/awesome-ios-architecture#mvvm" },
            { title: "Repository Pattern in iOS Apps", type: "deep_dive", url: "https://medium.com/tiendeo-tech/ios-repository-pattern-in-swift-85a8c62bf436" }
        ]
    },
    "n_arch_3": {
        title: "Combine Framework",
        description: "Use Apple's reactive Combine framework for event-driven programming with publishers and subscribers.",
        resources: [
            { title: "Combine Documentation (Apple)", type: "official", url: "https://developer.apple.com/documentation/combine" },
            { title: "Combine in Practice (WWDC 2019)", type: "video_en", url: "https://developer.apple.com/videos/play/wwdc2019/721/" },
            { title: "Combine Framework in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Getting Started with Combine – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/books/ios-swiftui/introduction-to-combine" },
            { title: "OpenCombine/OpenCombine", type: "github", url: "https://github.com/OpenCombine/OpenCombine" },
            { title: "Combine Operators Cheat Sheet", type: "cheat_sheet", url: "https://heckj.github.io/swiftui-notes/" },
            { title: "Custom Publishers Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/combine/creating-custom-publishers-to-wait-on-additional-conditions" }
        ]
    },
    // --- 6. Core Data & Storage ---
    "n_data_1": {
        title: "Core Data",
        description: "Persist and manage data locally in iOS apps using Apple's Core Data framework.",
        resources: [
            { title: "Core Data Documentation (Apple)", type: "official", url: "https://developer.apple.com/documentation/coredata" },
            { title: "Core Data Full Tutorial (Paul Hudson)", type: "video_en", url: "https://www.youtube.com/watch?v=O7u9nYWjvKk" },
            { title: "Core Data in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Setting Up Core Data – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/read/38/2/designing-a-core-data-model" },
            { title: "magicalpanda/MagicalRecord", type: "github", url: "https://github.com/magicalpanda/MagicalRecord" },
            { title: "Core Data Entities & Relationships Reference", type: "cheat_sheet", url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html" },
            { title: "Core Data Migrations Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/coredata/using_lightweight_migration" }
        ]
    },
    "n_data_2": {
        title: "SwiftData",
        description: "Use Apple's modern persistence framework SwiftData for a declarative, Swift-first database experience.",
        resources: [
            { title: "SwiftData Documentation (Apple)", type: "official", url: "https://developer.apple.com/xcode/swiftdata/" },
            { title: "SwiftData Introduction (WWDC 2023)", type: "video_en", url: "https://developer.apple.com/videos/play/wwdc2023/10187/" },
            { title: "SwiftData Tutorial in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Meet SwiftData – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/quick-start/swiftdata" },
            { title: "apple/sample-apps/SwiftDataIntro", type: "github", url: "https://github.com/apple/sample-apps" },
            { title: "SwiftData @Model Macro Reference", type: "cheat_sheet", url: "https://developer.apple.com/documentation/swiftdata/model()" },
            { title: "SwiftData Predicates & Queries", type: "deep_dive", url: "https://developer.apple.com/documentation/foundation/predicate" }
        ]
    },
    "n_data_3": {
        title: "UserDefaults & Keychain",
        description: "Store small amounts of user data with UserDefaults and secure sensitive data in the Keychain.",
        resources: [
            { title: "UserDefaults Documentation", type: "official", url: "https://developer.apple.com/documentation/foundation/userdefaults" },
            { title: "UserDefaults & Keychain in iOS (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=zvfViYmETuc" },
            { title: "UserDefaults in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Keychain Services API Guide", type: "article", url: "https://developer.apple.com/documentation/security/keychain_services" },
            { title: "kishikawakatsumi/KeychainAccess", type: "github", url: "https://github.com/kishikawakatsumi/KeychainAccess" },
            { title: "UserDefaults Property Wrappers", type: "cheat_sheet", url: "https://www.hackingwithswift.com/read/12/2/reading-and-writing-basics-userdefaults" },
            { title: "Keychain Items Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/security/keychain_services/keychain_items" }
        ]
    },
    "n_data_4": {
        title: "FileManager & Documents",
        description: "Read, write, and manage files within the iOS app sandbox using FileManager.",
        resources: [
            { title: "FileManager Documentation", type: "official", url: "https://developer.apple.com/documentation/foundation/filemanager" },
            { title: "File System in iOS (Kodeco Tutorial)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "FileManager in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "iOS App Sandbox & File System", type: "article", url: "https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html" },
            { title: "JohnSundell/Files", type: "github", url: "https://github.com/JohnSundell/Files" },
            { title: "FileManager API Reference", type: "cheat_sheet", url: "https://www.ioscreator.com/tutorials/file-manager-tutorial-ios-swift" },
            { title: "UIDocument and iCloud Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/uikit/uidocument" }
        ]
    },
    // --- 7. Networking ---
    "n_net_1": {
        title: "URLSession",
        description: "Make HTTP requests, download data, and manage sessions with Apple's URLSession API.",
        resources: [
            { title: "URLSession Overview (Apple)", type: "official", url: "https://developer.apple.com/documentation/foundation/urlsession" },
            { title: "URLSession Tutorial (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=zvfViYmETuc" },
            { title: "URLSession API Calls in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Fetching Website Data into Memory", type: "article", url: "https://developer.apple.com/documentation/foundation/url_loading_system/fetching_website_data_into_memory" },
            { title: "Alamofire/Alamofire", type: "github", url: "https://github.com/Alamofire/Alamofire" },
            { title: "URLSession Configuration Reference", type: "cheat_sheet", url: "https://developer.apple.com/documentation/foundation/urlsessionconfiguration" },
            { title: "Background URLSession Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/foundation/url_loading_system/downloading_files_in_the_background" }
        ]
    },
    "n_net_2": {
        title: "JSON & Codable",
        description: "Decode API JSON responses into Swift structs/classes using the Codable protocol.",
        resources: [
            { title: "Encoding and Decoding Custom Types (Apple)", type: "official", url: "https://developer.apple.com/documentation/foundation/archives_and_serialization/encoding_and_decoding_custom_types" },
            { title: "Codable in Swift (Paul Hudson)", type: "video_en", url: "https://www.youtube.com/watch?v=zvfViYmETuc" },
            { title: "Codable Protocol in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Using JSON with Custom Types – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/read/7/3/parsing-json-using-the-codable-protocol" },
            { title: "SwiftyJSON/SwiftyJSON", type: "github", url: "https://github.com/SwiftyJSON/SwiftyJSON" },
            { title: "Codable CodingKeys Cheat Sheet", type: "cheat_sheet", url: "https://benscheirman.com/2017/06/swift-json/" },
            { title: "Custom KeyDecodingStrategy", type: "deep_dive", url: "https://developer.apple.com/documentation/foundation/jsondecoder/keydecodingstrategy" }
        ]
    },
    "n_net_3": {
        title: "WebSockets & Real-time",
        description: "Implement real-time communication in iOS apps using URLSessionWebSocketTask or Starscream.",
        resources: [
            { title: "URLSessionWebSocketTask (Apple)", type: "official", url: "https://developer.apple.com/documentation/foundation/urlsessionwebsockettask" },
            { title: "WebSockets in iOS with Swift (Paul Hudson)", type: "video_en", url: "https://www.youtube.com/watch?v=zvfViYmETuc" },
            { title: "WebSockets iOS in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Getting Started with WebSockets in iOS", type: "article", url: "https://www.kodeco.com/861-websockets-on-ios-with-starscream" },
            { title: "daltoniam/Starscream", type: "github", url: "https://github.com/daltoniam/Starscream" },
            { title: "WebSocket Events Reference (MDN)", type: "cheat_sheet", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#events" },
            { title: "Network.framework Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/network" }
        ]
    },
    // --- 8. Concurrency ---
    "n_sync_1": {
        title: "Grand Central Dispatch (GCD)",
        description: "Manage concurrency in iOS apps with Dispatch queues, groups, and semaphores.",
        resources: [
            { title: "Dispatch Documentation (Apple)", type: "official", url: "https://developer.apple.com/documentation/dispatch" },
            { title: "Grand Central Dispatch Tutorial (Kodeco)", type: "video_en", url: "https://www.youtube.com/watch?v=n3W_vXgGvHU" },
            { title: "GCD in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Understanding GCD – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/read/9/3/gcd-101-async" },
            { title: "apple/swift-corelibs-libdispatch", type: "github", url: "https://github.com/apple/swift-corelibs-libdispatch" },
            { title: "DispatchQueue API Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/documentation/dispatch/dispatchqueue" },
            { title: "DispatchGroup & Barriers", type: "deep_dive", url: "https://developer.apple.com/documentation/dispatch/dispatchgroup" }
        ]
    },
    "n_sync_2": {
        title: "OperationQueue",
        description: "Manage dependencies between async operations using NSOperation and OperationQueue.",
        resources: [
            { title: "OperationQueue Documentation (Apple)", type: "official", url: "https://developer.apple.com/documentation/foundation/operationqueue" },
            { title: "Operations & OperationQueue in Swift (Kodeco)", type: "video_en", url: "https://www.youtube.com/watch?v=n3W_vXgGvHU" },
            { title: "OperationQueue in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "When to Use OperationQueues (Kodeco)", type: "article", url: "https://www.kodeco.com/5293-operation-and-operationqueue-tutorial-in-swift" },
            { title: "apple/AdvancedNSOperations Sample", type: "github", url: "https://developer.apple.com/library/archive/samplecode/AdvancedNSOperations/Introduction/Intro.html" },
            { title: "Operation Dependencies Reference", type: "cheat_sheet", url: "https://developer.apple.com/documentation/foundation/operation#1661268" },
            { title: "Async Operations with Combine", type: "deep_dive", url: "https://developer.apple.com/documentation/combine/processing-published-elements-with-subscribers" }
        ]
    },
    "n_sync_3": {
        title: "Swift Actors",
        description: "Eliminate data races in concurrent code by using Swift's actor model for safe mutable state.",
        resources: [
            { title: "Actors in Swift (Official)", type: "official", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/#Actors" },
            { title: "Swift Actors Explained (Vincent Pradeilles)", type: "video_en", url: "https://www.youtube.com/watch?v=n3W_vXgGvHU" },
            { title: "Swift Actors in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "What is an Actor? – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/quick-start/concurrency/what-is-an-actor-and-why-do-we-need-them" },
            { title: "apple/swift-async-algorithms", type: "github", url: "https://github.com/apple/swift-async-algorithms" },
            { title: "Actor Isolation Cheat Sheet", type: "cheat_sheet", url: "https://www.kodeco.com/28226563-swift-concurrency-cheat-sheet" },
            { title: "Global Actor (@MainActor) Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/swift/mainactor" }
        ]
    },
    // --- 9. Device Capabilities ---
    "n_dev_1": {
        title: "Core Location & Maps",
        description: "Access device GPS, display maps, and implement geofencing using Core Location and MapKit.",
        resources: [
            { title: "Core Location Documentation", type: "official", url: "https://developer.apple.com/documentation/corelocation" },
            { title: "Core Location & MapKit Tutorial (Kodeco)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "Maps & Location in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Getting Location Data – Hacking with Swift", type: "article", url: "https://www.hackingwithswift.com/read/22/overview" },
            { title: "apple/sample-MapKit", type: "github", url: "https://developer.apple.com/documentation/mapkit/displaying_an_apple_map" },
            { title: "Location Authorization Reference", type: "cheat_sheet", url: "https://developer.apple.com/documentation/corelocation/requesting_authorization_to_use_location_services" },
            { title: "Geofencing with CLCircularRegion", type: "deep_dive", url: "https://developer.apple.com/documentation/corelocation/monitoring_the_user_s_proximity_to_geographic_regions" }
        ]
    },
    "n_dev_2": {
        title: "Camera & AVFoundation",
        description: "Capture photos and videos, process audio, and interact with device media using AVFoundation.",
        resources: [
            { title: "AVFoundation Overview (Apple)", type: "official", url: "https://developer.apple.com/documentation/avfoundation" },
            { title: "Building a Custom Camera (Kodeco)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "Camera & AVFoundation in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Capturing Still Images with AVCaptureSession", type: "article", url: "https://developer.apple.com/documentation/avfoundation/capture_setup" },
            { title: "AVCam Sample App (Apple)", type: "github", url: "https://developer.apple.com/documentation/avfoundation/capture_setup/avcam_building_a_camera_app" },
            { title: "AVFoundation Reference Guide", type: "cheat_sheet", url: "https://developer.apple.com/av-foundation/" },
            { title: "Metal for Real-time Video Processing", type: "deep_dive", url: "https://developer.apple.com/documentation/metal" }
        ]
    },
    "n_dev_3": {
        title: "Push Notifications (APNs)",
        description: "Register for and handle remote push notifications on iOS using APNs and UNUserNotificationCenter.",
        resources: [
            { title: "UserNotifications Framework", type: "official", url: "https://developer.apple.com/documentation/usernotifications" },
            { title: "Push Notifications in iOS (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "APNs Setup in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Registering Your App with APNs", type: "article", url: "https://developer.apple.com/documentation/usernotifications/registering_your_app_with_apns" },
            { title: "nomad/houston (APNs Ruby gem)", type: "github", url: "https://github.com/nomad/houston" },
            { title: "APNs Notification Payload Reference", type: "cheat_sheet", url: "https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification" },
            { title: "Notification Service Extension Deep Dive", type: "deep_dive", url: "https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension" }
        ]
    },
    // --- 10. App Store Deployment ---
    "n_pub_1": {
        title: "Code Signing & Provisioning",
        description: "Understand certificates, provisioning profiles, and code signing to run apps on real devices and submit to the App Store.",
        resources: [
            { title: "Code Signing Guide (Apple)", type: "official", url: "https://developer.apple.com/support/code-signing/" },
            { title: "iOS Code Signing Explained (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "Provisioning Profiles in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "iOS Code Signing: The Definitive Guide", type: "article", url: "https://codesigning.guide/" },
            { title: "fastlane/match", type: "github", url: "https://github.com/fastlane/fastlane/tree/master/match" },
            { title: "Provisioning Profiles Reference", type: "cheat_sheet", url: "https://docs.fastlane.tools/codesigning/getting-started/" },
            { title: "Entitlements Reference", type: "deep_dive", url: "https://developer.apple.com/documentation/bundleresources/entitlements" }
        ]
    },
    "n_pub_2": {
        title: "TestFlight",
        description: "Distribute your iOS app to beta testers using Apple's TestFlight platform before App Store release.",
        resources: [
            { title: "TestFlight Help (Apple)", type: "official", url: "https://developer.apple.com/testflight/" },
            { title: "How to Upload to TestFlight (Kodeco)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "TestFlight Upload in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Beta Testing Your iOS App", type: "article", url: "https://www.kodeco.com/10204910-testflight-tutorial-ios-beta-testing" },
            { title: "fastlane/pilot", type: "github", url: "https://github.com/fastlane/fastlane/tree/master/pilot" },
            { title: "TestFlight Roles Cheat Sheet", type: "cheat_sheet", url: "https://developer.apple.com/help/app-store-connect/manage-users-and-roles/role-permissions" },
            { title: "TestFlight App Review Deep Dive", type: "deep_dive", url: "https://developer.apple.com/help/app-store-connect/test-a-beta-version/submit-an-app-for-beta-app-review" }
        ]
    },
    "n_pub_3": {
        title: "App Store Submission",
        description: "Prepare your app metadata, screenshots, and privacy info for a successful App Store launch.",
        resources: [
            { title: "App Store Review Guidelines", type: "official", url: "https://developer.apple.com/app-store/review/guidelines/" },
            { title: "App Store Submission Process (Sean Allen)", type: "video_en", url: "https://www.youtube.com/watch?v=VGHRWnzMmUs" },
            { title: "App Store Submission in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
            { title: "Common App Store Rejections & Fixes", type: "article", url: "https://developer.apple.com/app-store/review/rejections/" },
            { title: "fastlane/deliver", type: "github", url: "https://github.com/fastlane/fastlane/tree/master/deliver" },
            { title: "App Store Connect Checklist", type: "cheat_sheet", url: "https://developer.apple.com/app-store/product-page/" },
            { title: "Privacy Nutrition Labels Deep Dive", type: "deep_dive", url: "https://developer.apple.com/app-store/app-privacy-details/" }
        ]
    }
};
