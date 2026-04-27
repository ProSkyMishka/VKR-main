import SwiftUI

struct ContentView: View {
    let items = ["li018-it1", "li018-it2", "li018-it3", "li018-it4"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
