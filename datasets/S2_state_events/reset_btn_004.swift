import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb004-val: \(n)")
            HStack {
                Button("rb004-plus") { n += 1 }
                Button("rb004-reset") { n = 0 }
            }
        }
        .padding()
    }
}
