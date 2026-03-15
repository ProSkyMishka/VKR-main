import SwiftUI
struct ContentView: View {
    var body: some View {
        NavigationStack {
            NavigationLink("Next") { Text("Next") }
                .navigationTitle("Stack")
        }
    }
}
