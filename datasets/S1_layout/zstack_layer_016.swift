import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(4)
                .frame(width: 136, height: 76)
            VStack(spacing: 4) {
                Text("zl016-back")
                    .font(.caption)
                Text("zl016-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
