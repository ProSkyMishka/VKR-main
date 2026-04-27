import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb012-val: \(n)")
            HStack {
                Button("rb012-plus") { n += 1 }
                Button("rb012-reset") { n = 0 }
            }
        }
        .padding()
    }
}
