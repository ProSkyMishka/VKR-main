import SwiftUI

struct ContentView: View {
    @State private var msg = "mch012-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch012-change") { msg = "mch012-changed" }
        }
        .padding()
    }
}
