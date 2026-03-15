import SwiftUI
struct ContentView: View {
    var body: some View {
        NavigationView {
            List { Text("Row 1"); Text("Row 2") }
                .navigationTitle("List")
        }
    }
}
