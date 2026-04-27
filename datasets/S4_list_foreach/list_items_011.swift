import SwiftUI

struct ContentView: View {
    let items = ["li011-it1", "li011-it2", "li011-it3", "li011-it4", "li011-it5", "li011-it6", "li011-it7", "li011-it8", "li011-it9"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
