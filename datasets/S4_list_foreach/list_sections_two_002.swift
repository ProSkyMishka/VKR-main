import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section("ls002-secA") {
                Text("ls002-A1"); Text("ls002-A2")
            }
            Section("ls002-secB") {
                Text("ls002-B1"); Text("ls002-B2")
            }
        }
    }
}
