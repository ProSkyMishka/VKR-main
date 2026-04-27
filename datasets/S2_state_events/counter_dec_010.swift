import SwiftUI

struct ContentView: View {
    @State private var n = 5

    var body: some View {
        VStack {
            Text("cd010-n: \(n)")
            Button("cd010-dec") { n -= 3 }
        }
        .padding()
    }
}
