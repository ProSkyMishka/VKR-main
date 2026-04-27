import SwiftUI

struct ContentView: View {
    let items = ["li012-it1", "li012-it2", "li012-it3", "li012-it4"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
