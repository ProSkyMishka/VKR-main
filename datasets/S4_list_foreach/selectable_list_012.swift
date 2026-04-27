import SwiftUI

struct ContentView: View {
    @State private var picked = "sl012-none"
    let items = ["sl012-alpha", "sl012-beta", "sl012-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl012-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
