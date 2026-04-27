import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz011-step: \(step)").font(.headline)
            if step == 1 { Text("wz011-intro") }
            if step == 2 { Text("wz011-second") }
            if step == 3 { Text("wz011-finish") }
            HStack {
                Button("wz011-back") { if step > 1 { step -= 1 } }
                Button("wz011-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
