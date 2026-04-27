import SwiftUI

struct ContentView: View {
    let items = ["li015-it1", "li015-it2", "li015-it3", "li015-it4", "li015-it5", "li015-it6", "li015-it7"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
