import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb013-val: \(n)")
            HStack {
                Button("rb013-plus") { n += 1 }
                Button("rb013-reset") { n = 0 }
            }
        }
        .padding()
    }
}
