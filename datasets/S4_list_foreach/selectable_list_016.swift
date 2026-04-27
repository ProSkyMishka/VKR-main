import SwiftUI

struct ContentView: View {
    @State private var picked = "sl016-none"
    let items = ["sl016-alpha", "sl016-beta", "sl016-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl016-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
