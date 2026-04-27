import SwiftUI

struct ContentView: View {
    let items = ["li014-it1", "li014-it2", "li014-it3", "li014-it4", "li014-it5", "li014-it6"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
