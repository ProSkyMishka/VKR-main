import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc015-name")
                    .font(.title2)
                    .bold()
                Text("pc015-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc015-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc015-posts"); Text("\(25)").bold() }
                VStack { Text("pc015-followers"); Text("\(115)").bold() }
                VStack { Text("pc015-likes"); Text("\(1015)").bold() }
            }
        }
        .padding()
    }
}
