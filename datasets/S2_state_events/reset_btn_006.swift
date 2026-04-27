import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb006-val: \(n)")
            HStack {
                Button("rb006-plus") { n += 1 }
                Button("rb006-reset") { n = 0 }
            }
        }
        .padding()
    }
}
