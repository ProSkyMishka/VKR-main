import SwiftUI

struct ContentView: View {
    @State private var picked = "sl001-none"
    let items = ["sl001-alpha", "sl001-beta", "sl001-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl001-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
