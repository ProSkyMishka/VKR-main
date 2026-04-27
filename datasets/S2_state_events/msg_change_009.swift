import SwiftUI

struct ContentView: View {
    @State private var msg = "mch009-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch009-change") { msg = "mch009-changed" }
        }
        .padding()
    }
}
