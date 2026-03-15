import SwiftUI
struct ContentView: View {
    var body: some View {
        List {
            Section("A") { Text("A1"); Text("A2") }
            Section("B") { Text("B1"); Text("B2") }
        }
    }
}
