import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb005-val: \(n)")
            HStack {
                Button("rb005-plus") { n += 1 }
                Button("rb005-reset") { n = 0 }
            }
        }
        .padding()
    }
}
