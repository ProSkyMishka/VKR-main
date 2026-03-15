import SwiftUI
struct ContentView: View {
    var body: some View {
        NavigationView {
            List {
                NavigationLink("A") { Text("A") }
                NavigationLink("B") { Text("B") }
            }
            .navigationTitle("Inline")
        }
    }
}
