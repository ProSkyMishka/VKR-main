import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section("ls001-secA") {
                Text("ls001-A1"); Text("ls001-A2")
            }
            Section("ls001-secB") {
                Text("ls001-B1"); Text("ls001-B2")
            }
        }
    }
}
