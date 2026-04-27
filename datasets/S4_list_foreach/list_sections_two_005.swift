import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section("ls005-secA") {
                Text("ls005-A1"); Text("ls005-A2")
            }
            Section("ls005-secB") {
                Text("ls005-B1"); Text("ls005-B2")
            }
        }
    }
}
