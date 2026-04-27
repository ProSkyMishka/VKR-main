import SwiftUI

struct ContentView: View {
    let items = ["nlm006-one", "nlm006-two", "nlm006-three", "nlm006-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm006-selected: " + it) }
            }
            .navigationTitle("nlm006-list")
        }
    }
}
