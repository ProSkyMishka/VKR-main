import SwiftUI

struct ContentView: View {
    let items = ["nlm003-one", "nlm003-two", "nlm003-three", "nlm003-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm003-selected: " + it) }
            }
            .navigationTitle("nlm003-list")
        }
    }
}
