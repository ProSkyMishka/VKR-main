import SwiftUI

struct ContentView: View {
    let items = ["li013-it1", "li013-it2", "li013-it3", "li013-it4", "li013-it5"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
