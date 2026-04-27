import SwiftUI

struct ContentView: View {
    let items = ["li002-it1", "li002-it2", "li002-it3", "li002-it4", "li002-it5", "li002-it6"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
