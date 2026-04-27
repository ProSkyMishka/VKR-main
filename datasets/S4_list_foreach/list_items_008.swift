import SwiftUI

struct ContentView: View {
    let items = ["li008-it1", "li008-it2", "li008-it3", "li008-it4", "li008-it5", "li008-it6"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
