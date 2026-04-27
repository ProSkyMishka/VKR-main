import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb008-val: \(n)")
            HStack {
                Button("rb008-plus") { n += 1 }
                Button("rb008-reset") { n = 0 }
            }
        }
        .padding()
    }
}
