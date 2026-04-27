import SwiftUI

struct ContentView: View {
    @State private var picked = "sl010-none"
    let items = ["sl010-alpha", "sl010-beta", "sl010-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl010-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
