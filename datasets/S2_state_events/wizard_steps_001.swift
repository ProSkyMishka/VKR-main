import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz001-step: \(step)").font(.headline)
            if step == 1 { Text("wz001-intro") }
            if step == 2 { Text("wz001-second") }
            if step == 3 { Text("wz001-finish") }
            HStack {
                Button("wz001-back") { if step > 1 { step -= 1 } }
                Button("wz001-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
