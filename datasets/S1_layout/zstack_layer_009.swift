import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(13)
                .frame(width: 129, height: 69)
            VStack(spacing: 4) {
                Text("zl009-back")
                    .font(.caption)
                Text("zl009-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
