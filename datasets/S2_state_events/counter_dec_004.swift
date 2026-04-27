import SwiftUI

struct ContentView: View {
    @State private var n = 9

    var body: some View {
        VStack {
            Text("cd004-n: \(n)")
            Button("cd004-dec") { n -= 1 }
        }
        .padding()
    }
}
