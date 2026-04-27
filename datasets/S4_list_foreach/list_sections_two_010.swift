import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section("ls010-secA") {
                Text("ls010-A1"); Text("ls010-A2")
            }
            Section("ls010-secB") {
                Text("ls010-B1"); Text("ls010-B2")
            }
        }
    }
}
