import SwiftUI
struct ContentView: View {
    let items = ["X", "Y", "Z"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { item in
                NavigationLink(item) { Text("Detail \(item)") }
            }
            .navigationTitle("Items")
        }
    }
}
