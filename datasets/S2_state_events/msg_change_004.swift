import SwiftUI

struct ContentView: View {
    @State private var msg = "mch004-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch004-change") { msg = "mch004-changed" }
        }
        .padding()
    }
}
