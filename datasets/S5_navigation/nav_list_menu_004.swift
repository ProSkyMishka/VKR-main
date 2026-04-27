import SwiftUI

struct ContentView: View {
    let items = ["nlm004-one", "nlm004-two", "nlm004-three", "nlm004-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm004-selected: " + it) }
            }
            .navigationTitle("nlm004-list")
        }
    }
}
