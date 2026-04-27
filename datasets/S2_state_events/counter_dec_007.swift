import SwiftUI

struct ContentView: View {
    @State private var n = 12

    var body: some View {
        VStack {
            Text("cd007-n: \(n)")
            Button("cd007-dec") { n -= 4 }
        }
        .padding()
    }
}
