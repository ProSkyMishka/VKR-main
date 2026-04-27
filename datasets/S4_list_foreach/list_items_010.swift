import SwiftUI

struct ContentView: View {
    let items = ["li010-it1", "li010-it2", "li010-it3", "li010-it4", "li010-it5", "li010-it6", "li010-it7", "li010-it8"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
