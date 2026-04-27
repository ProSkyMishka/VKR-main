import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb010-val: \(n)")
            HStack {
                Button("rb010-plus") { n += 1 }
                Button("rb010-reset") { n = 0 }
            }
        }
        .padding()
    }
}
