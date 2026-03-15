import SwiftUI
struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 16) {
                NavigationLink("First") { Text("First") }
                NavigationLink("Second") { Text("Second") }
            }
            .navigationTitle("Buttons")
        }
    }
}
