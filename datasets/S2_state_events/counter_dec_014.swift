import SwiftUI

struct ContentView: View {
    @State private var n = 9

    var body: some View {
        VStack {
            Text("cd014-n: \(n)")
            Button("cd014-dec") { n -= 3 }
        }
        .padding()
    }
}
