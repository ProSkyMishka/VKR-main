import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb009-val: \(n)")
            HStack {
                Button("rb009-plus") { n += 1 }
                Button("rb009-reset") { n = 0 }
            }
        }
        .padding()
    }
}
