import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(8)
                .frame(width: 124, height: 64)
            VStack(spacing: 4) {
                Text("zl004-back")
                    .font(.caption)
                Text("zl004-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
