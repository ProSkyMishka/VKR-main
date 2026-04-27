import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb002-val: \(n)")
            HStack {
                Button("rb002-plus") { n += 1 }
                Button("rb002-reset") { n = 0 }
            }
        }
        .padding()
    }
}
